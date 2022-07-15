#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b);
int main(void)
{
    int N, M, num;
    int *arr;

    scanf("%d", &N);
    arr = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &arr[i]);
    }
    qsort(arr, N, sizeof(int), compare);
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &num);
        int start = 0;
        int end = M - 1;
        int mid = (end + start) / 2;
        int found = 0;;
        while (end - start >= 0)
        {
            if (arr[mid] == num)
            {
                found = 1;
                break;
            }
            else if (arr[mid] <= num)
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
            mid = (end + start) / 2;
        }
        if (found == 0)
            printf("0");
        else 
            printf("1");
        if (i < M - 1)
            printf("\n");
    }
    return (0);
}

int compare(const void *a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 < num2)
        return (-1);
    else if (num1 > num2)
        return (1);
    return (0);
}