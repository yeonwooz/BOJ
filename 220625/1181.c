#include <stdio.h>
#include <stdlib.h>

int len(char *str)
{
    int i;

    i  = 0;
    while (*(str + i))
        ++i;
    return (i);
}

int is_in(int *arr, char *str)
{
    for (int i = 0; i < 51; i += len(str))
    {
        for (int j = 0; j < len(str); ++j)
        {
            if (arr[i + j] != str[j])
                continue;
            if (j == len(str) - 1)
                return (1);
        }
    }
    return (0);
}

int main(void)
{
    int cnt;
    char word[51] = {0,};
    int **arr;
    
    arr = (int **)malloc(sizeof(int *) * 51);
    for (int i = 0; i < 51; ++i)
    {
      arr[i] = (int *)malloc(sizeof(int) * 1020000); 
      for (int j = 0; j < 1020000; ++j)
      {
        arr[i][j] = 0;
      }
    }
    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%s", word);

        if (is_in(arr[len(word)], word))
            continue;
        int k = 0;
        while (arr[len(word)][k])
            ++k;
        for (int j = 0; j < len(word); ++j)
        {
            arr[len(word)][k] = word[j];
            ++k;
        }
    }
    for (int i = 0; i < 51; ++i)
    {
        int k = 0;
        while (arr[i][k] != 0)
        {
            printf("%c", arr[i][k]);
            ++k;
        }
    }
}