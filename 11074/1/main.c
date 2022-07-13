#include <stdio.h>
#include <stdlib.h>

void solve(int N, int K);

int main(void)
{
    int N, K;

    scanf("%d %d", &N, &K);
    solve(N, K);
    return (0);
}

void solve(int N, int K)
{
    int *coins;
    
    coins =(int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
        scanf("%d", &coins[N-1-i]);

    int cnt = 0, idx = 0;
    while (K > 0)
    {
        if (K >= coins[idx])
        {
            K -= coins[idx];
            ++cnt;
        }
        else 
            ++idx;
    }
    printf("%d", cnt);
}