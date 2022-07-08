#include <stdio.h>
#include <stdlib.h>
#define MIN(a, b) (a < b ? a : b)
#define MAX(a, b) (a > b ? a : b)

void solve(int N);
int compare(const void* a, const void *b);
int upper_bound(int *arr, int len, int target);

int main(void)
{
    int N;

    scanf("%d",  &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int sum = 0, min = 4000, max = -4000;
    int mean, median;
    int *nums;
    int *modes;
    
    nums = (int *)malloc(sizeof(int) * N);
    modes = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &nums[i]); 
        modes[i] = 4001;
        sum += nums[i];
        min = MIN(nums[i], min);
        max = MAX(nums[i], max);
    }
    if (sum >= 0)
        mean = (float)sum / (float)N + 0.5;
    else
        mean = (float)sum / (float)N - 0.5;
    qsort(nums, N, sizeof(int), compare);
    median = nums[N / 2];
    
    int mode_idx = -1;
    int max_cnt = 1;
    int i = 0;
    while (i < N)
    {
        int upper_max = upper_bound(nums, N, nums[i]);
        if (max_cnt < upper_max - i)
        {
            max_cnt = upper_max - i;
            modes[0] = nums[i];
        }
        else if (max_cnt == upper_max - i)
        {
            modes[++mode_idx] = nums[i];
        } 
        ++i;
    }
    qsort(modes, N, sizeof(int), compare);
    printf("%d\n", mean);
    printf("%d\n", median);
    if (mode_idx > 0)
        printf("%d\n", modes[1]);
    else 
        printf("%d\n", modes[0]);
    printf("%d", max - min);
}

int compare(const void* a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;
    if (num1 < num2)
        return (-1);
    else if (num1 > num2)
        return (1);
    return (0);
}

int upper_bound(int *arr, int len, int target)
{
    int mid, start, end;
    start = 0; end = len - 1;
    
    while (end > start)
    {
        mid = (start + end) / 2;
        if (arr[mid] > target)
        {
            end = mid;
        }
        else 
        {
            start = mid + 1;
        }
    }
    if (end == len - 1 && arr[end] == target)
    {
        return end + 1;
    }
    return end;
}