#include <stdio.h>

void solve(int x);

int main(void)
{
    int x;

    scanf("%d", &x);
    solve(x);
    return (0);
}

void solve(int x)
{
    int tmp = x;
    int row = 1;
    while (tmp - row> 0)
    {
        tmp -= row;
        ++row;
    }
    int prev_cnts = (row - 1) * row / 2;
    int row_cnt = x - prev_cnts;

    int child;
    int parent;

    if (row % 2 == 0)
    {
        child = 1;
        parent = row;

        while (row_cnt > 1)
        {
            ++child;
            --parent;
            --row_cnt;
        }
    }
    else 
    {
        child = row;
        parent = 1;
        while (row_cnt > 1)
        {
            --child;
            ++parent;
            --row_cnt;
        }
    }
    printf("%d/%d", child, parent);
}
