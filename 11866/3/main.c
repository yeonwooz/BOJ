#include <stdio.h>

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
    int circle[1000] = {0,};
    for (int i = 0; i < N; ++i)
    {
        circle[i] = i + 1;
    }
    int loop = N;
    int idx = -1;   // 0번부터 세기 시작해야 함
    printf("<");
    while (loop > 0)
    {
        int interval = K;
        while (interval > 0)
        {
            idx = (idx + 1) % N;
            if (circle[idx])         
                --interval;
        }
        printf("%d", circle[idx]);
        circle[idx] = 0;
        if (loop > 1)
            printf(", ");
        --loop;
    }
    printf(">");
}