#include <stdio.h>

long long solve(int num);

int main(void)
{
    int T;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        int num;
        scanf("%d", &num);
        printf("%lld", solve(num));
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}

long long solve(int num)
{
    long long dp[101] = {0, };
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;
    dp[4] = 2;
    for (int i = 5; i <= num; ++i)
    {
        dp[i] = dp[i-1] + dp[i-5];
    }
    return (dp[num]);
}