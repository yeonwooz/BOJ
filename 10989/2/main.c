#include <stdio.h>

int main(void)
{
    int N;
    int input;
    int nums[10001]= {0,};
    int max = 0;

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &input);
        if (input > max)
            max = input;
        ++nums[input];
    }
    for (int i = 0; i <= max; ++i)
    {
        if (nums[i] == 0)
            continue;
        for (int j = 0; j < nums[i]; ++j)
        {
            printf("%d\n", i);
        }
    }
    return (0);
}