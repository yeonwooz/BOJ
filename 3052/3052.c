#include <stdio.h>
#include <stdlib.h>

int is_in(int *arr, int num, int current)
{
    int    i;
    
    if (current == 0)
        return (0);
    i = 0;
    while (i < current)
    {
        if (i != current && arr[i] == num)
            return (1);
        ++i;
    }
    return (0);
}

int main(void)
{
    int    dividend;
    int    remainder;
    int    *remains;
    int    cnt;
    
    remains = (int *)malloc(sizeof(int) * 10);
    cnt = 0;
    for (int i = 0; i < 10; ++i)
    {
        scanf("%d", &dividend);
        remainder = dividend % 42;
        remains[i] = dividend % 42;
    }
    
    for (int i = 0; i < 10; ++i)
    {
        if (is_in(remains, remains[i], i) == 0)
            cnt++;
    }
    
    printf("%d", cnt);
}