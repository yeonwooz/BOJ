#include <stdio.h>

int main(void)
{
    int nums[8] = {0,};
    int diff;

    for (int i = 0; i < 8; ++i)
    {
        scanf("%d", &nums[i]);
    }
    diff = nums[0] - nums[1];
    for (int i = 1; i < 7; ++i)
    {
        if (nums[i] - nums[i + 1] != diff)
        {
            printf("mixed");
            return (0);
        }
    }
    if (diff == -1)
        printf("ascending");
    else 
        printf("descending");
}