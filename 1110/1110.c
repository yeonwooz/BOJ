#include <stdio.h>

int back(int origin, int current, int cycle)
{
    int digit_sum;
    int new_num;
    
    if (origin == current)
        return (cycle);
    if (current < 10)
        digit_sum = current;
    else
        digit_sum = current / 10 + current % 10;
    cycle++;
    new_num = current % 10 * 10 + digit_sum % 10;

    back(origin, new_num, cycle);
    
}

int main(void)
{
    int num;
    int digit_sum;
    int new_num;
    int cycle;

    scanf("%d", &num);
    cycle = 0;
    if (num < 10)
        digit_sum = num;
    else
        digit_sum = num / 10 + num % 10;
    cycle++;
    new_num = num % 10 * 10 + digit_sum % 10;
    cycle = back(num, new_num, cycle);
    if (cycle)
    {
        printf("%d", cycle);
        return (0);
    }    
}