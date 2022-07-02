#include <stdio.h>
#include <stdlib.h>

int people_cnt(int *arr, int N)
{
    int cnt = 0;
    for (int i = 0; i < N; ++i)
    {
        if (arr[i] != 0)
            ++cnt;
    }
    return (cnt);
}

int main(void)
{
    int N, K, cnt, idx = -1;
    int *arr;
    
    scanf("%d %d", &N, &K);
    arr = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        arr[i] = i + 1;
    }
    printf("<");
    while (1)
    {
        if (people_cnt(arr, N) == 0)
            break;
        if (idx >= 0)
            printf(", ");
        cnt = 0;
        while (cnt < K)
        {
            ++idx;
            if (idx >= N)
            {
                idx %= N;
            }
            if (arr[idx] != 0)
            {
                ++cnt;
            }
        }
        printf("%d", arr[idx]);
        arr[idx] = 0;
    }
    printf(">");
    return (0);
}