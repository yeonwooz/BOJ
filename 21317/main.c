#include <stdio.h>
#define MIN(a,b) (a < b ? a : b)
#define MAX_POWER 5000 * 19;

int main(void)
{
    int N;
    int dp[21] = {0,};  // n번째 돌까지 갈때 필요한 최소에너지 
    int small_jumps[20] = {0,};
    int big_jumps[20] = {0,};
    int mega_jump;
    int min_power = MAX_POWER;

    scanf("%d", &N);
    
    for (int i = 1; i <= N - 1; ++i)
    {
        scanf("%d", &small_jumps[i]);
        scanf("%d", &big_jumps[i]);
    }
    scanf("%d", &mega_jump);

    dp[1] = 0;
    dp[2] = small_jumps[1];
    dp[3] = MIN(dp[2] + small_jumps[2], dp[1] + big_jumps[1]);

    for (int mj_to = 4; mj_to <= N; ++mj_to)
    {
        for (int i = 4; i <= N; ++i)
        {
            dp[i] = MIN(dp[i-1] + small_jumps[i-1], dp[i-2] + big_jumps[i-2]);
            if (i == mj_to)
            {
                dp[i] = MIN(dp[i], dp[i-3] + mega_jump);
            }
        }
        min_power = MIN(dp[N], min_power);
    }
    printf("%d", min_power);
    return (0);
}