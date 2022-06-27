#define _CRT_SECURE_NO_WARNINGS 
#include <stdio.h>
#include <string.h>

typedef struct {
	int len;
	char str[51];
} Word;

void sort(Word *words, int cnt)
{
    Word temp;
    for (int i = 0; i < cnt - 1; ++i)
    {
        for (int j = i + 1; j < cnt; ++j)
        {
            if (words[i].len)
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

    
    return (0);
}