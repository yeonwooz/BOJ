#include <stdio.h>
#include <stdlib.h>

void solve(int n);
int main(void)
{
    int n;

    scanf("%d", &n);
    solve(n);
    return (0);
}

void solve(int n)
{
    int *dp;
    dp = (int *)malloc(sizeof(int) * (n+1));
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; ++i)
    {
        dp[i] = (dp[i-1] + dp[i-2]) % 10007;
    } 
    printf("%d", dp[n]);
}