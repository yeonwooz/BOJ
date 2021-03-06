#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b);
int lower_bound(int *arr, int len, int target);
int upper_bound(int *arr, int len, int target);

int main(void)
{
    // 숫자 범위가 크므로 인덱스 저장하는 것은 비효율적이다
    // qsort 후에 이분탐색으로 찾고, 그 오른쪽으로 같은 수 몇개 있는지 탐색하기 
    // 이분탐색 lower bound : 하한선 찾기
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
        int lower = lower_bound(arr, N, num);
        int upper = upper_bound(arr, N, num);
        printf("%d", upper - lower);
        if (i < M - 1)
            printf(" ");
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

int lower_bound(int *arr, int len, int target)
{
    int start = 0;
    int end = len - 1;
    int mid;

    while (end > start)
    {
        mid = (start + end) / 2;
        if (target <= arr[mid])
            end = mid;
        else 
            start = mid + 1;
    }
    return (end);
}

int upper_bound(int *arr, int len, int target)
{
    int start = 0;
    int end = len - 1;
    int mid;

    while (end > start)
    {
        mid = (start + end) / 2;
        if (target < arr[mid])
            end = mid;
        else
            start = mid + 1;
    }
    if (end == len - 1 && arr[end] == target)
        return (end + 1);
    return (end);
}