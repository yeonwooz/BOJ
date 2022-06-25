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