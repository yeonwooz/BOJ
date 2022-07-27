#include <stdio.h>
#include <stdlib.h>

void solve();

int main(void)
{
    int T;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
        solve();
    return (0);
}

void solve()
{
    int N, M;
    scanf("%d %d", &N, &M);
    int *papers; // 숫자가 클수록 우선순위 높음
    papers = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &papers[i]);
    }

    int front = 0;
    int cnt = 0;

    while (1)
    {
        int printable = 1;
        for (int i = 0; i <= N; ++i)
        {
            if (i == front)
                continue;
            if (papers[i % N] > papers[front])
            {
                printable = 0;
                break;
            }
        }
        if (printable)
        {
            papers[front] = 0;
            ++cnt;
            if (front == M)
            {
                printf("%d\n", cnt);
                break;
            }
        }
        front = (front + 1) % N;
    }

    free(papers);
}