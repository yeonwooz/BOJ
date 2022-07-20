#include <stdio.h>
#include <stdlib.h>

void solve(int N, int M, int *arr1, int *arr2);
// void quick_sort(int *arr, int start, int end);
int lower_bound(int *arr, int len, int target);
int upper_bound(int *arr, int len, int target);
int cmp(const void *a, const void *b);

int main(void)
{
    int N, M;
    int *arr1;
    int *arr2;
    
    scanf("%d", &N);
    arr1 = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &arr1[i]);
    }

    scanf("%d", &M);
    arr2 = (int *)malloc(sizeof(int) * M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &arr2[i]);
    }
    
    solve(N, M, arr1, arr2);
    return (0);
}

void solve(int N, int M, int *arr1, int *arr2)
{
    // quick_sort(arr1, 0, N - 1);
    qsort(arr1, N, sizeof(int), cmp);
    for (int i = 0; i < M; ++i)
    {
        if (i == 0)
            printf("%d", upper_bound(arr1, N, arr2[i]) - lower_bound(arr1, N, arr2[i]));
        else
            printf(" %d", upper_bound(arr1, N, arr2[i]) - lower_bound(arr1, N, arr2[i]));
    }
}

int lower_bound(int *arr, int len, int target)
{
    int start = 0;
    int end = len - 1;

    while (start < end)
    {
        int mid = (start + end) / 2;
        if (arr[mid] < target)
            start = mid + 1;
        else
            end = mid;
    }
    return end;
}

int upper_bound(int *arr, int len, int target)
{
    int start = 0;
    int end = len - 1;

    while (start < end)
    {
        int mid = (start + end) / 2;
        if (arr[mid] > target)
            end = mid;
        else
            start = mid + 1;
    }
    if (end == len - 1 && arr[end] == target)
        return end + 1;
    return end;
}

int cmp(const void *a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 < num2)
        return (-1);
    else if (num1 > num2)
        return (1);
    return (0);
}


// quick sort 직접 구현시 시간초과 발생 ㅇㅅㅇ
// void quick_sort(int *arr, int start, int end)
// {
//     if(start >= end)    // start, end가 일치했거나 탐색이 끝났을 때
//         return ;

//     int pivot = start;
//     int i = pivot + 1;
//     int j = end;
//     int temp;

//     while (i <= j)
//     {
//         while (i <= end && arr[i] <= arr[pivot])
//         {
//             ++i;
//         }// i는 피벗보다 큰값을 찾을 때까지 증가
//         while (j > start && arr[j] > arr[pivot])
//         {
//             --j;
//         }// j는 피벗보다 작은값을 찾을 때까지 감소
//         if (i > j)
//         {
//             temp = arr[j];
//             arr[j] = arr[pivot];
//             arr[pivot] = temp;
//         }
//         else
//         {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     quick_sort(arr, start, j - 1);
//     quick_sort(arr, j + 1, end);
// }