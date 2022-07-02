#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int people, N, K, cnt, idx = -1;
    int *arr;
    
    scanf("%d %d", &N, &K);
    people = N;
    arr = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        arr[i] = i + 1;
    }
    printf("<");
    while (people > 0)
    {
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
        --people;
    }
    printf(">");
    return (0);
}