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
                DFS(field, history, row, col, N, M);
            }
        }
    }

    // printf("%d\n", DFS(field, history, N, M));
    // for (int row = 0; row < N; ++row)
    // {
    //     for (int col = 0; col < M; ++col)
    //     {
    //         printf("%d ", field[row][col]);
    //     }
    //     printf("\n");
    // }

    printf("%d", min_cnt);
    free(field);
    free(history);
}

void DFS(int **field, int **history, int x, int y, int N, int M)
{
    history[x][y] = 1;
    int dy[] = { 0, -1, 1, 0};
    int dx[] = { -1, 0, 0, 1};
    for (int i = 0; i < 4; i++) {
        int ax = x + dx[i];
        int ay = y + dy[i];
        
        // 배열의 인덱스를 넘지 않도록 
        if (ax < 0 || ay < 0 || ax >= M || ay >= N)             
            continue;
        
        // 배추가 없으면 탈출 / 방문했다면 탈출 
        if(!field[ax][ay] || history[ax][ay]) 
            continue;
 
        DFS(field, history, ax, ay, N, M);
    }
    return ;
}