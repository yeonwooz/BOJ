#include <stdio.h>

int main(void)
{
    int cnt;
    long double num;
    long double sum;
    
    scanf("%d", &cnt);
    scanf("%Lf", &num);
    sum = 0;
    for (int i = 0; i < cnt; ++i)
    {
        if (num < 10)
        {
            sum += num;
        }
        else 
        {
            sum += (int)num % 10;
            sum = (long double)sum;
        }
        num = num / 10;
    }
    printf("%Lf", sum);
}