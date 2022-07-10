#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

void solve(int N, int M, int **ground, int B, int max_block_height, int min_block_height);

int main(void)
{
    int N, M, B, max = 0, min = 256;  // long long?
    int **ground;

    scanf("%d %d %d", &N, &M, &B);
    ground = (int **)malloc(sizeof(int *) * N);
    for (int i = 0; i < N; ++i)
    {
        ground[i] = (int *)malloc(sizeof(int) * M);
        for (int j = 0; j < M; ++j)
        {
            scanf("%d", &ground[i][j]);
            if (max < ground[i][j])
                max = ground[i][j];
            if (min > ground[i][j])
                min = ground[i][j];
        }
    }
    solve(N, M, ground, B, max, min);
    return (0);
}

void solve(int N, int M, int **ground, int B, int max, int min)
{
    int cur_time = 0;
    int min_time = INT_MAX;
    int cur_H = max;
    int max_H = 256;

    while (cur_H >= min)
    {
        cur_time = 0;
        int inventory = B;
        int hole = 0;
        for (int i = 0; i < N; ++i)
        {
            for (int j = 0; j < M; ++j)
            {
                if (ground[i][j] == cur_H)
                    continue;
                else if (ground[i][j] > cur_H)
                {
                    int diff = ground[i][j] - cur_H;
                    inventory += diff;
                    cur_time += 2 * diff;
                } 
                else if (ground[i][j] < cur_H)
                {
                    int diff = cur_H - ground[i][j];
                    inventory -= diff;
                    cur_time += diff;
                }
            }
        }        
        if (inventory >= hole)
        {
            if (cur_time < min_time)
            {
                min_time = cur_time;
                max_H = cur_H;
            }
            else if (cur_time == min_time)
            {
                if (cur_H > max_H)
                {
                    max_H = cur_H;
                }
            }
        }
        --cur_H;
    }
    printf("%d %d", min_time, max_H);
}