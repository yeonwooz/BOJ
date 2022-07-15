#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int N, M;
    int *arr;
    int *dp;

    scanf("%d %d", &N, &M);
    arr = (int *)malloc(sizeof(int) * (N + 1));
    dp = (int *)malloc(sizeof(int) * (N + 1));
    arr[0] = 0;
    dp[0] = 0;

    for (int idx = 1; idx <= N; ++idx)
    {
        scanf("%d", &arr[idx]);
        dp[idx] = dp[idx-1] + arr[idx];
    }
    
    int i, j;
    for (int idx = 0; idx < M; ++idx)
    {
        scanf("%d %d", &i, &j);
        printf("%d\n", dp[j] - dp[i-1]);
    }

    free(arr);
    free(dp);
    return (0);
}
