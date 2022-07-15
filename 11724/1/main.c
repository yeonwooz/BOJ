#include <stdio.h>
#include <stdlib.h>

void solve(int N, int M);
void DFS(int **arr, int N, int v, int *visited);

int main(void)
{
    int N, M;

    scanf("%d %d", &N, &M);
    solve(N, M);
    return (0);
}

void solve(int N, int M)
{
    int **arr;

    arr = (int **)malloc(sizeof(int *) * (N + 1));
    for (int i = 0; i <= N; ++i)
    {
        arr[i] = (int *)malloc(sizeof(int) * (N + 1));
        for (int j = 0; j <= N; ++j)
        {
            arr[i][j] = 0;
        }
    }
    for (int i = 0; i < M; ++i)
    {
        int u, v;
        scanf("%d %d", &u, &v);
        arr[u][v] = 1;
        arr[v][u] = 1;
    }
   
    int chunk = 0;
    int visited[1001] = {0,};
    for (int i = 1; i <= N; ++i)
    {
        if (!visited[i])
        {
            ++chunk;
            DFS(arr, N, i, visited);
        }
    }
    printf("%d", chunk);
    free(arr);
}

void DFS(int **arr, int N, int v, int *visited)
{
    visited[v] = 1;
    for (int i = 1; i <= N; ++i)
    {
        if (arr[v][i] == 1 && !visited[i])
        {
            DFS(arr, N, i, visited);
        }
    }
}