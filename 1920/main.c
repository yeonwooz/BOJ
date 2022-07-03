#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(void)
{
    int N, M, target, num;
    int *arr;
    int has_pos_max = 0;
    int has_neg_max = 0;

    arr = (int *)malloc(sizeof(int) * INT_MAX);
    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &target);
        if (target == INT_MAX)
        {
            has_neg_max = 1;
        }
        else if (target == INT_MIN)
        {
            has_pos_max = 1;
        }
        else if (target >= 0)
        {
            if (arr[target] == 0)
                arr[target] = 1;
            else if (arr[target] == 2)
                arr[target] = 3;
        }
        else 
        {
            if (arr[target * -1] == 0)
                arr[target * -1] = 2;
            else if (arr[target * -1] == 1)
                arr[target * -1] = 3;
        }
    }
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        if (num == INT_MIN && has_neg_max || num == INT_MAX && has_pos_max)
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