#include <stdio.h>
#include <stdlib.h>

void solve(int N, int M, int **ground, int B, int max_block_height, int min_block_height);

int main(void)
{
    int N, M, B, max_block_height = 0, min_block_height = 256;  // long long?
    int **ground;

    scanf("%d %d %d", &N, &M, &B);
    ground = (int **)malloc(sizeof(int *) * N);
    for (int i = 0; i < N; ++i)
    {
        ground[i] = (int *)malloc(sizeof(int) * M);
        for (int j = 0; j < M; ++j)
        {
            scanf("%d", &ground[i][j]);
            if (max_block_height < ground[i][j])
                max_block_height = ground[i][j];
            if (min_block_height > ground[i][j])
                min_block_height = ground[i][j];
        }
    }
    solve(N, M, ground, B, max_block_height, min_block_height);
    return (0);
}

void solve(int N, int M, int **ground, int B, int max_block_height, int min_block_height)
{
    int cur_time;
    int min_time = 512 * 500 * 500;
    int cur_H = min_block_height;
    int max_H = min_block_height;

    while (cur_H <= max_block_height)
    {
        cur_time = 0;
        int inventory = B;
        for (int i = 0; i < N; ++i)
        {
            for (int j = 0; j < M; ++j)
            {
                if (ground[i][j] == cur_H)
                    continue;
                if (ground[i][j] > cur_H)
                {
                    int diff = ground[i][j] - cur_H;
                    inventory += diff;
                    cur_time += 2;
                }
                else if (ground[i][j] < cur_H)
                {
                    int diff = cur_H - ground[i][j];
                    if (inventory < diff)
                        continue;
                    inventory -= diff;
                    ++cur_time;
                }
            }
        }
        if (cur_time > 0 && cur_time < min_time)
        {
            min_time = cur_time;
            max_H = cur_H;
        }
        else if (cur_time == min_time)
        {
            if (cur_H > max_H)
                max_H = cur_H;
        }
        ++cur_H;
    }
    printf("%d %d", min_time, max_H);
}