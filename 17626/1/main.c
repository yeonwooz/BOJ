#include <stdio.h>
#include <math.h>
#define MIN(a,b) (a < b ? a : b)
#define min_cnt 4
void solve(int N);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int dp[50001] = {0,};

    dp[1] = 1;
    for (int i = 2; i <= N; ++i)
    {
        dp[i] = min_cnt;

        for (int j = 1; j * j <= i; ++j)
        {
            dp[i] = MIN(dp[i], dp[i - j * j] + 1);
        }
    }
    printf("%d", dp[N]);
}