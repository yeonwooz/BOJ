#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#define MIN(a,b) (a < b ? a : b)

typedef struct _Dot
{
    int v;
    int depth;
} Dot;


void solve(int **arr, int N, int M);
int BFS(int **arr, int *visited, int v, int N);
// BFS 깊이의 합
int main(void)
{
    int N, M;
    int **arr;

    scanf("%d %d", &N, &M);
    arr = (int **)malloc(sizeof(int *) * (N+1));
    for (int i = 0; i <= N; ++i)
    {
        arr[i] = (int *)malloc(sizeof(int) * (N + 1));
        for (int j = 0; j <= N; ++j)
        {
            arr[i][j] = 0;
        }
    }
    for (int idx = 0; idx <= M; ++idx)
    {
        int i, j;
        scanf("%d %d", &i, &j);
        arr[i][j] = 1;
        arr[j][i] = 1;
    }
    solve(arr, N, M);
    free(arr);
    return (0);
}

void solve(int **arr, int N, int M)
{
    int kevins[101] = {0,};
    int min_kevin = INT_MAX;
    int min_person = INT_MAX;

    for (int i = 1; i <= N; ++i)
    {
        int visited[101] = {0,};
        kevins[i] = BFS(arr, visited, i, N);
        if (kevins[i] < min_kevin)
        {
            min_kevin = kevins[i];
            min_person = i;   
        }
        if (kevins[i] == min_kevin)
        {
            min_person = MIN(min_person, i);
        }
    }

    printf("%d", min_person);
}

int BFS(int **arr, int *visited, int v, int N)
{
    Dot queue[101] = {0, };
    int bottom = 0;
    int top = 0;

    visited[v] = 1;
    queue[top].v = v;
    queue[top].depth = 0;
    top++;

    int sum_depth = 0;
    while (bottom < top)
    {
        int popped = queue[bottom].v;
        int depth = queue[bottom].depth;
        sum_depth += depth;
        // printf("popped=%d, depth=%d\n", queue[bottom].v, queue[bottom].depth);

        queue[bottom].v = 0;
        queue[bottom].depth = 0;
        bottom++;
        for (int i = 1; i <= N; ++i)
        {
            if (arr[popped][i] == 1 && !visited[i])
            {
                visited[i] = 1;
                queue[top].v = i;
                queue[top].depth = depth + 1;
                top++;
            }
        }
    }
    return (sum_depth);
}
