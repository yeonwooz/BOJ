#include <stdio.h>
#include <stdlib.h>

int get_len(char *str)
{
    int i;

    i = 0;
    while (str[i])
        ++i;
    return (i);
}

int main(void)
{
    int cnt;
    int *scores;
    char    *str;
    int sum;
    int len;
    
    str = (char *)malloc(sizeof(char) * 80);
    scanf("%d", &cnt);
    sum = 0;
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%s", str);
        len = get_len(str);
        scores = (int *)malloc(sizeof(int) * len);

        if (str[0] == 'O')
        {
            scores[0] = 1;
        }
        else 
        {
            scores[0] = 0;
        }
        sum += scores[0];
        for (int j = 1; j < len; ++j)
        {
            if (str[j] == 'O')
            {
                if (str[j - 1] == 'O')
                {
                    scores[j] = scores[j - 1] + 1;
                }
                else
                {
                    scores[j] = 1;
                }
            }
            else 
            {
               scores[j] = 0; 
            }
            sum += scores[j];
        }
        printf("%d\n", sum);
        sum = 0;
    }
}