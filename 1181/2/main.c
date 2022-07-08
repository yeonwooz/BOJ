#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct word
{
    char str[51];
    int len;
} Word;

int compare(const void* a, const void* b);
int is_duplicated(Word *words, char *str, int i);

int main(void)
{
    int N;
    char str[51] = {0};
    Word *words;

    scanf("%d", &N);
    words = (Word *)malloc(sizeof(Word) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%s", str);
        if (is_duplicated(words, str, i))
        {
            words[i].len = 0;
            strcpy(words[i].str, "");
        }
        else 
        {
            words[i].len = strlen(str);
            strncpy(words[i].str, str, words[i].len);
        }
    }
    qsort(words, N, sizeof(words[0]), compare);
    for (int i = 0; i < N; ++i)
    {
        if (words[i].len)
            printf("%s\n", words[i].str);
    }
    return (0);
}

int compare(const void* a, const void* b)
{
    Word str1 = *(Word *)a;
    Word str2 = *(Word *)b;

    if (str1.len < str2.len)
        return (-1);
    else if (str1.len > str2.len)
        return (1);
    else
    {
        if (strcmp(str1.str, str2.str) < 0)
            return (-1);
        else if (strcmp(str1.str, str2.str) > 0)
            return (1);
    }
    return (0);
}

int is_duplicated(Word *words, char *str, int i)
{
    for (int j = 0; j < i; ++j)
    {
        if (strcmp(words[j].str, str) == 0)
            return (1);
    }  
    return (0);
}