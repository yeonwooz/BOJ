#include <stdio.h>
#include <stdlib.h>

void print(int **arr, int com_cnt);
void DFS(int **arr, int com_cnt, int v, int *visited);

int main(void)
{
    int com_cnt, edge_cnt;
    int **arr;

    scanf("%d", &com_cnt);
    arr = (int **)malloc(sizeof(int *) * (com_cnt + 1));
    for (int i = 0; i < com_cnt + 1; ++i)
    {
        arr[i] = (int *)malloc(sizeof(int) * (com_cnt + 1));
        for (int j = 0; j < com_cnt + 1; ++j)
            arr[i][j] = 0;
    }
    scanf("%d", &edge_cnt);
    for (int i = 0; i < edge_cnt; ++i)
    {
        int com1, com2;

        scanf("%d %d", &com1, &com2);
        arr[com1][com2] = 1;
        arr[com2][com1] = 1;

    }
    int cnt = 0;
    int v = 1;
    int visited[101] = {0,};
    DFS(arr, com_cnt, v, visited);
    for (int i = 2; i < 101; ++i)
    {
        if(visited[i])
            ++cnt;
    }
    printf("%d", cnt);
    free(arr);
    return (0);
}

void DFS(int **arr, int com_cnt, int v, int *visited)
{
    visited[v] = 1;
    for (int i = 1; i <= com_cnt; ++i)
    {
        if (arr[v][i] == 1 && !visited[i])
         DFS(arr, com_cnt, i, visited);
    }
}