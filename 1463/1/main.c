#include <stdio.h>
#define MAX_SIZE 1000001
#define MIN(a,b) (a < b ? a : b)

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
    int dp[MAX_SIZE] = {0,};
    dp[1] = 0;
    for (int i = 2; i <= N; ++i)
    {
        // 1을 빼는 연산을 한번 추가하는 점화식
        dp[i] = dp[i - 1] + 1;

        // 2 나누는 연산을 한번 추가하는 점화식
        if (i % 2 == 0)
        {
            dp[i] = MIN(dp[i], dp[i / 2] + 1);
        }
        // 3 나누는 연산을 한번 추가하는 점화식
        if (i % 3 == 0)
        {
            dp[i] = MIN(dp[i], dp[i / 3] + 1);
        }
    }
    return (dp[N]);
}


