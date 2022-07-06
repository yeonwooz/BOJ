#include <stdio.h>

int push(int *arr, int num, int len);
int pop(int *arr, int len);
int is_in(int *arr, int num, int len);

int main(void)
{
    int n, cur, prev = 0, prev_max = 1;
    int seq[100000];
    int nums[100000] = {0, };
    int used[100000] = {0, };
    scanf("%d", &n);
    for (int i = 0; i < n; ++i)
    {
        scanf("%d", &seq[i]);
        if (i >= 2)
        {
            if (seq[i-2] > seq[i-1] && seq[i-2] > seq[i] && seq[i-1] < seq[i])
            {
                printf("NO");
                return (0);
            }
        }
    }

    for (int i = 0; i < n; ++i)
    {
        int cur = seq[i];        
        int j = prev_max;
        while (j <= cur)
        {
            if (!is_in(nums, j, n) && !is_in(used, j, n))
            {
                push(nums, j, n);
                if (j == cur)
                    pop(nums, n);
            }
            ++j;
        }
                
        if (prev > 0 && prev > cur)
        {
            int j = prev;
            while (j >= cur)
            {   
                if(is_in(nums, j, n))
                {
                    pop(nums, n);
                }
                --j;
            }
        }
        
        prev = cur;
        if (prev_max < cur)
            prev_max = cur;
        used[i] = cur;
    }

    return (0);
}

int push(int *arr, int num, int len)
{
    int i = 0;
    while (arr[i])
        ++i;
    if (i >= len)
        return (-1);
    arr[i] = num;
    printf("+\n");
    return (1);
}

int pop(int *arr, int len)
{
    int i = len - 1;
    while (!arr[i])
        --i;
    if (i < 0)
        return (-1);
    arr[i] = 0;
    printf("-\n");
    return (1);
}

int is_in(int *arr, int num, int len)
{
    for (int i = 0; i < len; ++i)
    {
        if (arr[i] == num)
            return (1);
    }
    return (0);
}