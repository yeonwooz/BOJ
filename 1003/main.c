#include <stdio.h>

int main(void)
{
    int T, N, one_cnt, zero_cnt, new_one_cnt, new_zero_cnt;
    int cnts[2] = {0, };
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%d", &N);
        if (N == 0)
            printf("1 0");
        else if (N == 1)
            printf("0 1");
        else if (N == 2)
            printf("1 1");
        else
        {
            zero_cnt = 1;
            one_cnt = 1;
            int j = 3;
            while (j <= N)
            {
                new_zero_cnt = one_cnt;
                new_one_cnt = one_cnt + zero_cnt;
                zero_cnt = new_zero_cnt;
                one_cnt = new_one_cnt;
                ++j;
            }
            printf("%d %d", zero_cnt, one_cnt);
        }
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}