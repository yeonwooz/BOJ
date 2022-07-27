#include <stdio.h>
#include <stdlib.h>

long long K = 0, N = 0;
long long *lines;
long long len = 0;

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
    scanf("%lld %lld", &K, &N);
    if (K && N)
    {
        lines = (long long *)malloc(sizeof(long long) * K);
        if (!lines)
            return (0);
        for (int i = 0; i < K; ++i)
        {
            scanf("%lld", &lines[i]);
        }
        qsort(lines, K, sizeof(long long), cmp);
        return (1);
    }
    return (0);
}

void solve()
{
    long long start = 1;
    long long end = lines[K - 1];   // 굳이 정렬 안하고 최대값만 찾아도 됨

    while (start <= end)
    {
        long long mid = (start + end) / 2;    // long long 자료형 필요 
        long long cnt = 0;
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

    printf("%lld", len);
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