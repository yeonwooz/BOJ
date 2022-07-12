#include <stdio.h>
#include <stdlib.h>

void solve();
void DFS(int **field, int **history, int i, int j, int N, int M);
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
    int M, N, K;
    int X, Y;
    int **field;
    int **history;

    scanf("%d %d %d", &M, &N, &K);
    field = (int **)malloc(sizeof(int *) * N);
    history = (int **)malloc(sizeof(int *) * N);

    for (int row = 0; row < N; ++row)
    {
        field[row] = (int *)malloc(sizeof(int) * M);
        history[row] = (int *)malloc(sizeof(int) * M);
        for (int col = 0; col < M; ++col)
        {
            field[row][col] = 0;
            history[row][col] = 0;
        }
    }

    for (int i = 0; i < K; ++i)
    {
        scanf("%d %d", &X, &Y);
        field[Y][X] = 1;
    }
    int min_cnt = 0;

    for (int row = 0; row < N; ++row)
    {
        for (int col = 0; col < M; ++col)
        {
            if (field[row][col] == 1 && !history[row][col])
            {
                ++min_cnt;
                DFS(field, history, row, col, N, M);    // 조건에 맞을 때 인접칸 방문하면서 history 를 채울 것임 
            }
        }
    }

    printf("%d\n", min_cnt);
    free(field);
    free(history);
}

void DFS(int **field, int **history, int i, int j, int N, int M)
{
    history[i][j] = 1;
    
    int di[4] = {-1, +1, 0, 0};
    int dj[4] = {0, 0, -1, +1};

    for (int idx = 0; idx < 4; ++idx)
    {
        int next_i = i + di[idx];
        int next_j = j + dj[idx];

        if (next_i < 0 || next_i >= N || next_j < 0 || next_j >= M)
            continue;
        if (!field[next_i][next_j] || history[next_i][next_j] == 1)
            continue;
        DFS(field, history, next_i, next_j, N, M);
    }
}