#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(void)
{
    int K, N, max = INT_MIN, cnt = 0;
    int *cables;

    scanf("%d %d", &K, &N);
    cables = (int *)malloc(sizeof(int) * K);
    for (int i = 0; i < K; ++i)
    {
        scanf("%d", &cables[i]);
        if (cables[i] > max)
            max = cables[i];
    }

    int index = 0;
    int divisor = 1;
    while (cnt < N - 1)
    {
        max = cables[index] / divisor;
        cnt = 0;
        for (int i = 0; i < K; ++i)
        {
            cnt += cables[i] / max;
        }
        ++index;
        if (index >= K)
            index = 0;
        if (index == 0)
            ++divisor;  
    }
    while (cnt < N)
    {
        max -= 1;
        cnt = 0;
        for (int i = 0; i < K; ++i)
        {
            cnt += cables[i] / max;
        }
    }
    printf("%d", max);
    return (0);
}