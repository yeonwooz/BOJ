#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <string.h>
#include <stdlib.h> 

typedef struct {
	int len;
	char str[51];
} Word;

int compare(const void* st1, const void* st2)
{
    Word *a = (Word *)st1;
    Word *b = (Word *)st2;
    if (a -> len < b -> len)
        return (-1);
    else if (a -> len > b -> len)
        return (1);
    else 
    {
        if (strcmp(a -> str, b -> str) < 0)
            return(-1);
        else
            return (1);
    }
    return (0);  // 완전히 동일하므로 출력하지 말아야 함
}

int main(void)
{
    int cnt;
    char input[51] = {0,};
    Word words[20000] = {0, };
    
    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%s", input);
        words[i].len = strlen(input);
        strcpy(words[i].str, input);
        for (int j = 0; j < i; ++j)
        {
            if (strcmp(words[i].str, words[j].str) == 0)
            {
                --i;
                --cnt;
                break; 
            }
        }
    }
    qsort(words, cnt, sizeof(words[0]), compare);
    for (int i = 0; i < cnt; ++i)
    {
        if (words[i].len > 0)
            printf("%s\n", words[i].str);
    }
    return (0);
}