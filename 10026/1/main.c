#include <stdio.h>
#include <stdlib.h>

void solve(int N);
void DFS(char **grid, int i, int j, int N, int **visited);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    char **grid1;
    char **grid2;
    grid1 = (char **)malloc(sizeof(char *) * N);
    grid2 = (char **)malloc(sizeof(char *) * N);

    for (int i = 0; i < N; ++i)
    {
        grid1[i] = (char *)malloc(sizeof(char) * N);
        grid2[i] = (char *)malloc(sizeof(char) * N);

        scanf("%s", grid1[i]);
        for (int j = 0; j < N; ++j)
        {
            if (grid1[i][j] == 'R')
                grid2[i][j] = 'G';
            else
                grid2[i][j] = grid1[i][j];
        }
    }

    int **visited1;
    int **visited2;
    
    visited1 = (int **)malloc(sizeof(int *) * N);
    visited2 = (int **)malloc(sizeof(int *) * N);

    for (int i = 0; i < N; ++i)
    {
        visited1[i] = (int *)malloc(sizeof(int) * N);
        visited2[i] = (int *)malloc(sizeof(int) * N);
        for (int j = 0; j < N; ++j)
        {
            visited1[i][j] = 0;
            visited2[i][j] = 0;
        }
    }

    // grid 1 search
    int cnt1 = 0;
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < N; ++j)
        {
            if (visited1[i][j] == 0)
            {
                DFS(grid1, i, j, N, visited1);
                cnt1++;
            }
        }
    }
    // grid 2 search
    int cnt2 = 0;
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < N; ++j)
        {
            if (visited2[i][j] == 0)
            {
                DFS(grid2, i, j, N, visited2);
                cnt2++;
            }
        }
    }
    printf("%d %d", cnt1, cnt2);
    

    // for (int i = 0; i < N; ++i)
    // {
    //     printf("%s\n", grid2[i]);
    // }


    free(grid1);
    free(grid2);
}

void DFS(char **grid, int i, int j, int N, int **visited)
{
    visited[i][j] = 1;
    int i_c[4] = {0, -1, 0, 1};
    int j_c[4] = {-1, 0, 1, 0};
    for (int idx = 0; idx < 4; ++idx)
    {
        int next_i = i + i_c[idx];
        int next_j = j + j_c[idx];

        if (next_i < 0 || next_j < 0 || next_i >= N || next_j >= N || visited[next_i][next_j] == 1)
            continue;
        if (grid[i][j] != grid[next_i][next_j])
            continue;
        
        DFS(grid, next_i, next_j, N, visited);    
    }
    
}