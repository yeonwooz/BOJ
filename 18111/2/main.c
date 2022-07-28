#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MAX 256

int N = 0, M = 0, B = -1;
int **board;
int time = INT_MAX, height = MAX;
int min_height = MAX;
int max_height = 0;

int init(void);
void solve(void);

int main(void)
{
    if(init())
    {
        solve();
        printf("%d %d", time, height);
        if (board)
            free(board);
    }
    return (0);
}

int init(void)
{
    scanf("%d %d %d", &N, &M, &B);  
    /*
    B < 6.4 × 10^7 
    B += 500 * 6.4 × 10^7  ... => long ?
    */
    if (N && M && B >= 0)
    {
        board = (int **)malloc(sizeof(int *) * N);
        if (!board)
            return (0);
        for (int i = 0; i < N; ++i)
        {
            board[i] = (int *)malloc(sizeof(int) * M);
            if (!board[i])
                return (0);
            for (int j = 0; j < M; ++j)
            {
                scanf("%d", &board[i][j]);
                if (min_height > board[i][j])
                    min_height = board[i][j];
                if (max_height < board[i][j])
                    max_height = board[i][j];
            }
        }
        return (1);
    }
    return (0);
}

void solve()
{
    int h = max_height;

    while (h >= min_height)
    {
        int t = 0;
        int inventory = B;
        for (int i = 0; i < N; ++i)
        {
            for (int j = 0; j < M; ++j)
            {
                if (board[i][j] == h)
                    continue;
                else if (board[i][j] > h)
                {
                    // cmd 1
                    int diff = board[i][j] - h;
                    inventory += diff;
                    t += 2 * diff;
                }
                else
                {
                    // cmd 2
                    int revDiff = h - board[i][j];
                    inventory -= revDiff;
                    t += revDiff;
                }
            }
        }
        if (inventory >= 0)
        {
            if (t < time)
            {
                time = t;
                height = h;
            }
            else if (t == time)
            {
                if (h > max_height)
                    height = h;
            }
        }
        --h;
    }
}