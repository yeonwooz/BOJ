#include <stdio.h>

int main(void)
{
    int N, M, target, num;
    int arr[100001] = {0, };

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &arr[i]);
    }
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        for (int j = 0; j < N; ++j)
        {
            if (arr[j] == num)
            {
                printf("1");
                break;
            }
            if (j == N - 1)
                printf("0");
        }
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}