#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int cnt;
    int *nums;
    int temp;

    scanf("%d", &cnt);
    nums = (int *)malloc(sizeof(int) * cnt);
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%d", &nums[i]);
    }

    for (int i = 0; i < cnt - 1; ++i)
    {
        for (int j = i + 1; j < cnt; ++j)
        {
            if (nums[i] > nums[j])
            {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }  
    
    for (int i = 0; i < cnt; ++i)
    {
        printf("%d\n", nums[i]);
    }  
}