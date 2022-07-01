#include <stdio.h>
#include <stdlib.h>

int len(char *str)
{
    int i;

    i = 0;
    while (str[i])
        ++i;
    return (i);
}

int main(void)
{
    int     case_cnt;
    int     rep_cnt;
    char    *str;

    scanf("%d", &case_cnt);

    for (int i = 0; i < case_cnt; ++i)
    {
        str = (char *)malloc(sizeof(char) * 20);
        scanf("%d %s", &rep_cnt, str);
        for (int j = 0; j < len(str); ++j)
        {
            for (int k = 0; k < rep_cnt; ++k)
            {
                printf("%c", str[j]);
            }

        }
        printf("\n");
        free(str);
    }
}