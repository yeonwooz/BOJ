#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <string.h>

typedef struct {
	int len;
	char str[51];
} Word;

int compare(char *s1, char *s2)
{
    if (strlen(s1) < strlen(s2))
        return (1);
    else if (strlen(s1) > strlen(s2))
        return (-1);
    else 
    {
        for (int i = 0; i < strlen(s1); ++i)
        {
            if (s1[i] > s2[i])
                return (-1);
            else if (s1[i] < s2[i])
                return (1);
        }
    }
    return (0);  // 완전히 동일하므로 출력하지 말아야 함
}

void sort(Word *words, int cnt)
{
    Word temp;
    for (int i = 0; i < cnt - 1; ++i)
    {
        for (int j = i + 1; j < cnt; ++j)
        {
            if (compare(words[i].str, words[j].str) == -1)
            {
                temp = words[i];
                words[i] = words[j];
                words[j] = temp;
            }
            else if (compare(words[i].str, words[j].str) == 0)
            {
                strcpy(words[j].str, "\0");
                words[j].len = 0;
            }
        }
    }
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
    }
    sort(words, cnt);
    for (int i = 0; i < cnt; ++i)
    {
        if (words[i].len > 0)
            printf("%s\n", words[i].str);
    }
    return (0);
}