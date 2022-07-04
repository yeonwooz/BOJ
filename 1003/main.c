#include <stdio.h>

int fibo(int n, int *cnts)
{
    if (n == 0)
    {
        ++cnts[0];
        return 0;
    }
    else if (n == 1)
    {
        ++cnts[1];
        return 1;
    }
    else
    {
        int cnt_1[2] = {0,};
        int cnt_2[2] = {0,};
        int result = fibo(n - 1, cnt_1) + fibo(n - 2, cnt_2);   
        cnts[0] = cnt_1[0] + cnt_2[0];
        cnts[1] = cnt_1[1] + cnt_2[1];
        return result;
    }
}

int main(void)
{
    int T, N;
    int cnts[2] = {0, };
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%d", &N);
        if (N == 0)
            printf("1 0");
        else if (N == 1)
            printf("0 1");
        else
        {
            fibo(N, cnts);
            printf("%d %d", cnts[0], cnts[1]);
        }
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}