#include <stdio.h>

int main(void)
{
    int cnt;

    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {
        for (int j = 1; j <= i + 1; ++j)
        {
            printf("*");
        }
            printf("\n");
    }
    return (0);
}