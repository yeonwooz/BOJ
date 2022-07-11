#include <stdio.h>
#define MAX 1000000

int solve(int N, int cnt, int min_cnt);
int main(void)
{
    int N;
    int min_cnt = MAX;

    scanf("%d", &N);
    printf("%d", solve(N, 0, min_cnt));
    return (0);
}

int solve(int N, int cnt, int min_cnt)
{
    if (N == 1)
    {
        if (cnt < min_cnt)
            min_cnt = cnt;
        return min_cnt;
    }
    if (N % 3 == 0 && N / 3 >= 1)
    {
        min_cnt = solve(N / 3, cnt + 1, min_cnt);
    }
    if (N % 2 == 0 && N / 2 >= 1)
    {
        min_cnt = solve(N / 2, cnt + 1, min_cnt);
    }
    if (N - 1 >= 1)
    {
        min_cnt = solve(N - 1, cnt + 1, min_cnt);
    }
    return min_cnt;
}
