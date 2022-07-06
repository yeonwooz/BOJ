#include <stdio.h>

int main(void)
{
    int cnt;
    int input;
    int nums[10001] = {0,};

    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {   
        scanf("%d", &input);
        nums[input]++;
    } 
    
    for (int i = 0; i < 10001; ++i)
    {
        if (nums[i] == 0)
            continue;

        for (int j = 0; j < nums[i]; ++j)
        {
            printf("%d\n", i);
        }
    }  
}