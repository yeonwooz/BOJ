#include <stdio.h>
#include <stdlib.h>

int K = 0, N = 0;
int *lines;
long len = 0;

int init();
void solve();
int cmp(const void*, const void*);

int main(void)
{
    if (init())
    {
        solve();
        free(lines);
    }
    return (0);
}

int init()
{
    scanf("%d %d", &K, &N);
    if (K && N)
    {
        lines = (int *)malloc(sizeof(int) * K);
        if (!lines)
            return (0);
        for (int i = 0; i < K; ++i)
        {
            scanf("%d", &lines[i]);
        }
        qsort(lines, K, sizeof(int), cmp);
        return (1);
    }
    return (0);
}

void solve()
{
    long start = 1;
    long end = lines[K - 1];

    while (start <= end)
    {
        long mid = (start + end) / 2;    // long 자료형 필요 
        long cnt = 0;
        for (int i = 0; i < K; ++i)
        {
            cnt += lines[i] / mid;
        }

        if (cnt < N)
        {
            end = mid - 1;
            continue;
        }
        if (cnt >= N)
        {
            start = mid + 1;
            if (len < mid)
                len = mid;
        }
    }
    printf("%ld", len);
}

int cmp(const void* a, const void* b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 > num2)
        return (1);
    if (num1 < num2)
        return (-1);
    return (0);
}