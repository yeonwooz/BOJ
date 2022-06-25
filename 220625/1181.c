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

int compare(char *s1, char *s2)
{
    if (len(s1) < len(s2))
        return (1);
    else if (len(s1) > len(s2))
        return (-1);
    else 
    {
        for (int i = 0; i < len(s1); ++i)
        {
            if (s1[i] > s2[i])
                return (-1);
            else if (s1[i] < s2[i])
                return (1);
        }
    }
    return (0);  // 완전히 동일하므로 출력하지 말아야 함
}

int main(void)
{
    int cnt;
    char prevWord[51] = {0, };
    char currentWord[51] = {0,};
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
        scanf("%s", currentWord);
        if (i == 0)
        {
            for (int j = 0; j < len(currentWord); ++j)
            {
                arr[len(currentWord)][j] = currentWord[j];
            }
        }
        else
        {
            printf("%d", i);
            if (compare(prevWord, currentWord) == 1)
            {
                int k = 0;
                while (arr[len(currentWord)][k])
                    ++k;
                for (int j = 0; j < len(currentWord); ++j)
                {
                    arr[len(currentWord)][j + k] = currentWord[j];
                }
            }
            else if (compare(prevWord, currentWord) == -1)
            {
                int k = 0;
                while (arr[len(currentWord)][k])
                    ++k;
                for (int j = 0; j < len(currentWord); ++j)
                {
                    arr[len(currentWord)][j+k] = arr[len(currentWord)][j+k - len(currentWord)];
                    arr[len(currentWord)][j+k - len(currentWord)] = currentWord[j];
                }
            }
            else
                continue;
        }
        for (int i = 0; i < len(currentWord); ++i)
        {
            prevWord[i] = currentWord[i];
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