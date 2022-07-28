#include <stdio.h>
#include <stdlib.h>

int N = 0, M = 0;
int height = 0;
int min = 0, max = 0;
int *trees;

int init(void);
void solve(void);

int main(void)
{
    if(init())
    {
        solve();
        if (trees)
            free(trees);
    }
    return (0);
}

int init(void)
{
    scanf("%d %d", &N, &M);
    if (N && M)
    {
        trees = (int *)malloc(sizeof(int) * N);
        for (int i = 0; i < N; ++i)
        {
            scanf("%d", &trees[i]);
            if (max < trees[i])
                max = trees[i];
        }
        return (1);
    }
    return (0);
}

void solve()
{
    while (min < max)
    {
        long mid = (min + max) / 2;
        long sum = 0;
        for (int i = 0;  i < N; ++i)
        {
            if (trees[i] > mid)
                sum += trees[i] - mid;
        }
        if (sum < M)
            max = mid;
        else
        {
            min = mid + 1;
            if (height < mid)
                height = mid;
        }
    }
    printf("%d", height);
}