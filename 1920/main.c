#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int N, M, target, num;
    int *arr;

    arr = (int *)malloc(sizeof(int) * 2147483649);
    // for (int i = 0; i <= 2147483648; ++i)
    // {
    //     arr[i] = 0;
    // }
    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &target);
        if (target == -2147483648)
        {
            if (arr[0] == 0)
                arr[0] = 2;
            else 
                arr[0] = 3;
        }
        else if (target >= 0)
        {
            if (arr[target] == 0)
                arr[target] = 1;
            else if (arr[target] == 1 || arr[target] == 2)
                arr[target] = 3;
        }
        else 
        {
            if (arr[target * -1] == 0)
                arr[target * -1] = 2;
            else if (arr[target * -1] == 1 || arr[target * -1] == 2)
                arr[target * -1] = 3;
        }
    }
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        if (num == -2147483648 && (arr[0] == 2 || arr[0] == 3))
            printf("1");
        else if (num >= 0 && (arr[num] == 1 || arr[num] == 3) || num < 0 && (arr[num * -1] == 2 ||arr[num * -1] == 3))
            printf("1");
        else
            printf("0");
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}