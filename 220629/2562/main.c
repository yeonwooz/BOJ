#include <stdio.h>

int main(void)
{
    int num = 0, max = 0, order = 0;
    
    for (int i = 0; i < 9; ++i)
    {
        scanf("%d", &num);
        if (num > max)
        {
            order = i + 1;
            max = num;
        }
    }
    printf("%d\n%d", max, order);
    return (0);
}