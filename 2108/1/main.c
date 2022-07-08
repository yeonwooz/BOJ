#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define MIN(a, b) (a < b ? a : b)
#define MAX(a, b) (a > b ? a : b)

void solve(int N);
int compare(const void* a, const void *b);

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
    float mean;
    int median, mode;
    int *nums;
    int cnts[8001] = {0,};
    
    nums = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &nums[i]); 
        cnts[nums[i] + 4000]++;
        sum += nums[i];
        min = MIN(nums[i], min);
        max = MAX(nums[i], max);
    }
    mean = round((float)sum / (float)N);
    if (mean == -0)
        mean = 0;
    qsort(nums, N, sizeof(int), compare);
    median = nums[N / 2];
    
    int max_cnt = 0;
    int first_min_mode_val = -4001;
    int second_min_mode_val = -4001;

    for (int i = 0; i <= max + 4000; ++i)
    {
        if (max_cnt < cnts[i])
        {
            max_cnt = cnts[i];
            first_min_mode_val = i - 4000;
            second_min_mode_val = -4001;
        }
        else if (max_cnt == cnts[i])
        {
            if (second_min_mode_val == -4001)
            {
                second_min_mode_val = i - 4000;
            }
            else 
            {
                if (i - 4000 < first_min_mode_val && first_min_mode_val < second_min_mode_val)
                {
                    first_min_mode_val = i - 4000;
                    second_min_mode_val = first_min_mode_val;
                }
                else if (first_min_mode_val > i - 4000 && i - 4000 < second_min_mode_val)
                {
                    second_min_mode_val = i - 4000;
                }
            }
        }
    }
    
    printf("%.f\n", mean);
    printf("%d\n", median);
    if (second_min_mode_val == -4001)
        printf("%d\n", first_min_mode_val);
    else 
        printf("%d\n", second_min_mode_val);
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
