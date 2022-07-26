#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int N = 0;
int *nums;
int *cnts;
float avg; 
int mid, mode, range;

int init();
void solve();
void calc_agv();
void calc_mid();
void calc_mode();
void calc_range();
void quick_sort(int*, int, int);
int lower_bound(int *nums, int len, int target);
int upper_bound(int *nums, int len, int target);

int main(void)
{
    if (init())
    {
        solve();
        free(nums);
        free(cnts);
    }
    return (0);
}

int init()
{
    scanf("%d", &N);
    
    if (N)
    {
        nums = (int *)malloc(sizeof(int) * N);
        for (int i = 0; i < N; ++i)
        {
            scanf("%d", &nums[i]);
        }
        return (1);
    }
    return (0);
}

void solve()
{
    quick_sort(nums, 0, N - 1);
    calc_agv();
    calc_mid();
    calc_mode();
    calc_range();
    printf("%.0f\n%d\n%d\n%d", avg, mid, mode, range);
}

void calc_agv()
{
    int sum = 0;
    for (int i = 0; i < N; ++i)
    {  
        sum += nums[i];
    }
    avg = round((float)sum / (float)N);
    if (avg == -0)
        avg = 0;
}

void calc_mid()
{
    mid = nums[N / 2];
}

void calc_mode()
{   
    cnts = (int *)malloc(sizeof(int) * N);
    int max_cnt = 0;
    int first_least, second_least;
    for (int i = 0; i < N; ++i)
    {
        cnts[i] = upper_bound(nums, N, nums[i]) - lower_bound(nums, N, nums[i]);
        if (max_cnt < cnts[i])
        {
            max_cnt = cnts[i];
            first_least = nums[i];
            second_least = -4001;
        }
        else if (max_cnt == cnts[i])
        {
            if (second_least == -4001 && first_least != nums[i])
                second_least = nums[i];
        }
    }

    if (second_least == -4001)
        mode = first_least;
    else 
        mode = second_least;
}

void calc_range()
{
    range = nums[N - 1] - nums[0];
}

void quick_sort(int *nums, int L, int R)
{
    int left = L;
    int right = R;
    int pv = nums[(L + R) / 2];

    while (left <= right)
    {
        while (nums[left] < pv) ++left;
        while (nums[right] > pv) --right;

        if (left <= right)
        {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            ++left;
            --right;
        }
    }
    if (L < right)
        quick_sort(nums, L, right);
    if (R > left)
        quick_sort(nums, left, R);
}

int lower_bound(int *nums, int len, int target)
{
    int start = 0;
    int end = len - 1;
    while (start < end)
    {
        int mid = (start + end) / 2;
        if (nums[mid] >= target)
            end = mid;
        else
            start = mid + 1;
    }
    return (end);
}

int upper_bound(int *nums, int len, int target)
{
    int start = 0;
    int end = len - 1;
    while (start < end)
    {
        int mid = (start + end) / 2;
        if (nums[mid] > target)
            end = mid;
        else
            start = mid + 1;
    }
    if (nums[end] == target && end == len - 1)
        return (end + 1);
    return (end);
}