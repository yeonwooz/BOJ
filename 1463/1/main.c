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
    if (N == 2 || N == 3)
    {
        if (cnt < min_cnt)
            min_cnt = cnt;
        return min_cnt + 1; 
    }
    if (N % 3 == 0)
    {
        min_cnt = solve(N / 3, cnt + 1, min_cnt);
    }
    else if (N % 3 == 1)
    {
        min_cnt = solve((N - 1) / 3, cnt + 2, min_cnt);

    } else
    {
        if (N % 2 == 0)
        {
            min_cnt = solve(N / 2, cnt + 1, min_cnt);
        }
        else 
        {
            min_cnt = solve((N - 2) / 2, cnt + 3, min_cnt);
        }
    }
    return min_cnt;
}
