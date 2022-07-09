#include <stdio.h>
#include <stdlib.h>

int solve();

int main(void)
{
    int T;
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        printf("%d", solve());
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}

int solve()
{
    int N, M;
    int *queue;
    int answer = 0;
    scanf("%d %d", &N, &M);
    queue = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &queue[i]);
    }
    if (N == 1)
        return 1;
    
    // 원형큐 사용
    int front = 0;
    int rear = N - 1;
    
    while (1)
    {
        int can_print = 1;
        for (int i = 0; i < N; ++i)
        {
            if (i != (front % N) && queue[front % N] < queue[i % N])
            {
                can_print = 0;
                break;
            }
        }
        if (can_print)
        {
            queue[front % N] = 0;
            ++answer;
            if (front % N == M)
                break;
            front = (front +1 ) % N;
        }
        else
        {
            rear = 0;
            front = (front + 1) % N;
        }
    }
    return answer;
}