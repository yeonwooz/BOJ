#include <stdio.h>
#include <stdlib.h>

typedef struct _TMT
{
    int row;
    int col;
    int depth; // 며칠째에 익는가
} TMT;

int M = 0, N = 0;
int **box;
int **visited;
int cnt = 0;    // 익어야 하는 토마토 개수 (0의 개수)

int init();
void solve();
void BFS();

int main(void)
{
    if (init())
    {
        solve();
        free(box);
    }

    return (0);
}

int init()
{
    scanf("%d %d", &M, &N);
    box = (int **)malloc(sizeof(int *) * N);
    visited = (int **)malloc(sizeof(int *) * N);
    for (int i = 0; i < N; ++i)
    {
        box[i] = (int *)malloc(sizeof(int) * M);
        visited[i] = (int *)malloc(sizeof(int) * M);
        for (int j = 0; j < M; ++j)
        {
            scanf("%d", &box[i][j]);
            visited[i][j] = 0;
            if (box[i][j] == 0)
                ++cnt;
        }
    }
    if (M && N)
        return (1); 
    return (0);
}

void solve() 
{
    if (cnt == 0)
    {  
        printf("0");
        return ;
    }
    BFS();
}

void BFS()
{
    TMT *queue = (TMT *)malloc(sizeof(TMT) * M * N);  
    int top = 0;
    int bottom = 0;
    int depth = 1;
    
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < M; ++j)
        {
            if (box[i][j] == 1 && visited[i][j] == 0)
            {
                queue[top].row = i;
                queue[top].col = j;
                queue[top].depth = depth;
                ++top;
                visited[i][j] = 1;  
            }
        }
    }
    
    while (top > bottom)
    {       
        if (cnt == 0)
            break;
        TMT popped = queue[bottom];
        ++bottom;
        depth = popped.depth;
 
        int i_d[4] = {-1, 0, 1, 0};
        int j_d[4] = {0, 1, 0, -1};
        for (int k = 0; k < 4; ++k)
        {
            int next_i = popped.row + i_d[k];
            int next_j = popped.col + j_d[k];
            if (next_i < 0 || next_j < 0 || next_i >= N || next_j >= M)
                continue;
            if (visited[next_i][next_j] == 1 || box[next_i][next_j] != 0)
                continue;
            queue[top].row = next_i;
            queue[top].col = next_j;
            queue[top].depth = depth + 1;
            ++top;
            visited[next_i][next_j] = 1;
            box[next_i][next_j] = 1;
            --cnt;
        }
    }

    free(queue);
            
    if (cnt == 0)
    {  
        printf("%d", depth);
        return ;
    }
    printf("-1");
}