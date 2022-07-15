#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b);
int binsearch(int *arr, int len, int target);

int main(void)
{
    int N, M;
    int arr1[100000] = {0,};
    
    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &arr1[i]);
    }
    qsort(arr1, N, sizeof(int), cmp);
    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
    {
        int num;
        scanf("%d", &num);
        int found = binsearch(arr1, N, num);
        if (found >= 0)
            printf("1\n");
        else 
            printf("0\n");
    }
    return (0);
}

int cmp(const void *a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 == num2)
        return 0;
    return (num1 > num2);   // num1 - num2 하면 결과는 나오는데 채점 틀림
}

int binsearch(int *arr, int len, int target)
{
    int start = 0;
    int end = len - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (arr[mid] == target)
            return (mid);
        if (arr[mid] < target)
            start = mid + 1;
        if (arr[mid] > target)
            end = mid - 1;
    }
    return (-1);
}