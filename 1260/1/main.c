#include <stdio.h>
#include <stdlib.h>

void DFS(int **arr, int *visited, int V, int N);
void BFS(int **arr, int *visited, int V, int N);

int main(void)
{
    int N, M, V;
    int **arr;

    scanf("%d %d %d", &N, &M, &V);
    arr = (int **)malloc(sizeof(int *) * (N + 1));

    for (int i = 0; i <= N; ++i)
    {
        arr[i] = (int *)malloc(sizeof(int) * (N + 1));
        for (int j = 0; j <= N; ++j)
        {
            arr[i][j] = 0;
        }
    }
    for (int idx = 0; idx < M; ++idx)
    {
        int i, j;
        scanf("%d %d", &i, &j);
        arr[i][j] = 1;
        arr[j][i] = 1;
    }
    int d_visited[1001] = {0, };
    DFS(arr, d_visited, V, N);
    printf("\n");

    int b_visited[1001] = {0, };
    BFS(arr, b_visited, V, N);
    return (0);
}

void DFS(int **arr, int *visited, int V, int N)
{
    visited[V] = 1;
    printf("%d ", V);
    for (int i = 0; i <= N; ++i)
    {
        for (int j = 0; j <= N; ++j)
        {
            if (i == V && arr[i][j] == 1 && !visited[j])
            {
                DFS(arr, visited, j, N);
            }
        }
    }
}
void BFS(int **arr, int *visited, int V, int N)
{
    int queue[1001] = {0,};
    int front = 0, rear = 0, pop;
    printf("%d ", V);
    visited[V] = 1;
    queue[rear++] = V;

    while (front < rear)
    {
        pop = queue[front++];
        for (int j = 1; j <= N; ++j)
        {
            if (arr[pop][j] == 1 && !visited[j])
            {
                printf("%d ", j);
                queue[rear++] = j;
                visited[j] = 1;
            }
        }
    }
}