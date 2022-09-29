#include <stdio.h>

int solve(int n);
int main(void)
{
    int T, n;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%d", &n);
        printf("%d", solve(n));
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}

int solve(int n)
{
    int dp[11] = {0,};
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (int i = 4; i <= n; ++i)
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    return dp[n];
}