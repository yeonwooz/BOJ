#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int N, M;
    int *arr;

    scanf("%d %d", &N, &M);
    arr = (int *)malloc(sizeof(int) * N);
    for (int idx = 0; idx < N; ++idx)
    {
        scanf("%d", &arr[idx]);
    }

    for (int idx = 0; idx < M; ++idx)
    {
        int i, j, sum = 0;
        scanf("%d %d", &i, &j);
        --i;  // i번째를 i번 인덱스로 변경
        --j;
        for (int pt = i; pt <= j; ++pt)
        {
            sum += arr[pt];
        }
        printf("%d\n", sum);
    }

    free(arr);
    return (0);
}
