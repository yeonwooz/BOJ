#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int cnt;
    int input;
    int nums[10000] = {0,};
    int temp;

    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%d", &input);
        for (int j = 0; j <= cnt; ++j) 
        {
            if (input == nums[i])
                break;
            if (j == cnt)
                nums[i] = input;
        }
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