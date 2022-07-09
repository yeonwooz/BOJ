#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    long long N, M, H = 0;
    long long *tree_lens;
    long long max_len = 0;

    scanf("%lld %lld", &N, &M);
    tree_lens = (long long *)malloc(sizeof(long long) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%lld", &tree_lens[i]);
        if (max_len < tree_lens[i])
            max_len = tree_lens[i];
    }

    long long end = max_len;
    long long start = 0;
    while (end >= start)
    {
        long long mid = (start + end) / 2;   // potential H
        long long sum = 0;
        for (int i = 0; i < N; ++i)
        {
            if (tree_lens[i] > mid)
                sum += tree_lens[i] - mid;
        }
        if (sum < M)
        {
            end = mid - 1;
        }
        else 
        {
            start = mid + 1;
            if (H < mid)
                H = mid;
        } 
    }
    printf("%lld", H);
    return (0);
}