#include <stdio.h>

int main(void)
{
    int N, M, target, num;
    int arr[200001] = {0, };

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &target);
        if (target >= 0)
            arr[target] = 1;
        else 
            arr[target * -1 + 100000] = 1;
    }
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        if (num >= 0 && arr[num] == 1 || num < 0 && arr[num * -1 + 100000] == 1)
            printf("1");
        else
            printf("0");
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}