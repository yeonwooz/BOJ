#include <stdio.h>
#include <limits.h>
#define MIN(a,b) (a < b ? a : b)

int main(void)
{
    int N;
    int dp[21] = {0,};  // n번째 돌까지 갈때 필요한 최소에너지 
    int small_jumps[20] = {0,};
    int big_jumps[20] = {0,};
    int mega_jump;
    int min_power;

    scanf("%d", &N);
    
    for (int i = 1; i <= N - 1; ++i)
    {
        scanf("%d", &small_jumps[i]);
        scanf("%d", &big_jumps[i]);
    }
    scanf("%d", &mega_jump);

    dp[1] = 0;
    dp[2] = small_jumps[1];

    for (int i = 3; i <= N; ++i)
    {
        dp[i] = MIN(dp[i-1] + small_jumps[i-1], dp[i-2] + big_jumps[i-2]);
    }
    min_power = dp[N];
    for (int mj_from = 1; mj_from <= N - 1; ++mj_from)
    {
        for (int i = 4; i <= N; ++i)
        {
            // mj_from 가 바뀌면서 dp테이블도 계속 업데이트되어야 한다
            if (i == mj_from + 3)
                dp[i] = MIN(dp[i], dp[i-3] + mega_jump);
            else
                dp[i] = MIN(dp[i-1] + small_jumps[i-1], dp[i-2] + big_jumps[i-2]);
        }
        min_power = MIN(dp[N], min_power);
    }
    printf("%d", min_power);
    return (0);
}