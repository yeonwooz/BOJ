#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(void)
{
    long long K, N, min = 1, max = INT_MIN, length = 0;
    long long *cables;

    scanf("%lld %lld", &K, &N);
    cables = (long long *)malloc(sizeof(long long) * K);
    for (int i = 0; i < K; ++i)
    {
        scanf("%lld", &cables[i]);
        if (cables[i] > max)
            max = cables[i];
    }

    while (min <= max)
    {
        long long mid = (min + max) / 2;
        long long cnt = 0;
        for (int i = 0; i < K; ++i)
        {
            cnt += cables[i] / mid;
        }
        if (cnt >= N)
        {
            min = mid + 1;
            if (length < mid)
                length = mid;
        }
        else 
            max = mid - 1;
    }
    printf("%lld", length);
    return (0);
}