#include <stdio.h>
#define MAX(a,b) (a > b ? a : b)

int solve(int N);

int main(void)
{
    int N;

    scanf("%d", &N);
    printf("%d", solve(N));
    return (0);
}

int solve(int N)
{
    int dp[301] = {0, };
    int scores[301] = {0, };
    for (int i = 1; i <= N; ++i)
    {
        scanf("%d", &scores[i]);
    }

    dp[1] = scores[1];
    dp[2] = scores[1] + scores[2];
    dp[3] =  MAX(scores[1] + scores[3], scores[2] + scores[3]);

    for (int i = 4; i <= N; ++i)
    {
        dp[i] = MAX(dp[i - 2] + scores[i], dp[i - 3] + scores[i - 1] + scores[i]);       
    }
    return dp[N];
}