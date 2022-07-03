#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    long long N, M, target, num;
    long long *arr;

    scanf("%lld", &N);
    arr = (long long *)malloc(sizeof(long) * 2147483648 * 3);
    for (int i = 0; i < N; ++i)
    {
        scanf("%lld", &target);
        if (target >= 0)
            arr[target] = 1;
        else 
            arr[target * -1 + 2147483648 * 2] = 1;
    }
    scanf("%lld", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%lld", &num);
        if (num >= 0 && arr[num] == 1 || num < 0 && arr[num * -1 + 2147483648 * 2] == 1)
            printf("1");
        else
            printf("0");
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}