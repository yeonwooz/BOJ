#include <stdio.h>

int main(void)
{
    int N, M, target, num;
    int arr[100001] = {0, };

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &target);
        arr[target] = 1;
    }
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        if (arr[num] == 1)
            printf("1");
        else
            printf("0");
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}