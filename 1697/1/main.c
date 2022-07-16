#include <stdio.h>
#define MIN(a, b) (a < b ? a : b)
#define LEFT_EDGE 0
#define RIGHT_EDGE 100000

void solve(int N, int K);
int is_valid(int n, int *visited);
int BFS(int v, int K, int *visited);

int main(void)
{
    int N, K;

    scanf("%d %d", &N, &K);
    solve(N, K);
    return (0);
}

void solve(int N, int K)
{
    int visited[100001] = {0,};

    printf("%d",BFS(N, K, visited));
}

typedef struct _Pos
{
    int v;
    int depth;
} Pos;

int BFS(int v, int K, int *visited)
{
    Pos queue[100001] = {-1, };
    int top = 0;
    int bottom = 0;
    int total_depth = 0;

    queue[top].v = v;
    queue[top].depth = 0;
    ++top;
    visited[v]= 1;

    while (bottom < top)
    {
        int popped = queue[bottom].v;
        int depth = queue[bottom].depth;
        total_depth = depth;

        queue[bottom].v = -1;  // empty queue
        queue[bottom].depth = -1;
        ++bottom;
        
        if (popped == K)
            break;

        if (is_valid(popped - 1, visited))
        {
            queue[top].v = popped - 1;
            queue[top].depth = depth + 1;
            ++top;
            visited[popped - 1] = 1;
        }
        if (is_valid(popped + 1, visited))
        {
            queue[top].v = popped + 1;
            queue[top].depth = depth + 1;
            ++top;
            visited[popped + 1] = 1;
        }
        if (is_valid(popped * 2, visited))
        {
            queue[top].v = popped * 2;
            queue[top].depth = depth + 1;
            ++top;
            visited[popped * 2] = 1;
        }
    }
    return (total_depth);
}

int is_valid(int n, int *visited)
{
    if (n < 0 || n > 100000 || visited[n])
        return (0);
    return (1);
}