#include <stdio.h>
#include <stdlib.h>

int N = 0;
char **arr;

int init(void);
void solve(void);
void quad(int, int, int);

int main(void)
{
    if(init())
    {
        solve();
    }
    return (0);
}

int init(void)
{
    scanf("%d", &N);
    if (N)
    {
        arr = (char **)malloc(sizeof(char *) * N);
        if (!arr)
            return (0);
        for (int i = 0; i < N; ++i)
        {
            arr[i] = (char *)malloc(sizeof(char) * (N + 1));
            if (!arr[i])
                return (0);
            scanf("%s", arr[i]);      
        }
        return (1);
    }
    return (0);
}

void solve()
{
    quad(N, 0, 0);
}


void quad(int size, int start_i, int start_j)
{
    char criteria = arr[start_i][start_j];
    for (int i = start_i; i < start_i + size; ++i)
    {
        for (int j = start_j; j < start_j + size; ++j)
        {
            if (i == start_i && j == start_j)
                continue;

            if (arr[i][j] != criteria)
            {     
                printf("(");
                quad(size/2, start_i, start_j);
                quad(size/2, start_i, start_j + size/2);
                quad(size/2, start_i + size/2, start_j);
                quad(size/2, start_i + size/2, start_j + size/2);
                printf(")");
                return;
            }
        }
    }

    printf("%c", criteria);
}