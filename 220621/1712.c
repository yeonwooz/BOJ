#include <stdio.h>

int main(void)
{
    long a;
    long b;
    long c;
    long x;   

    scanf("%d %d %d", &a, &b, &c);
    if ((int)c - (int)b <=0)
    {
        printf("%d", -1);
        return (0);
    }
    else
    {
        x = (int)a / ((int)c - (int)b);
        printf("%d", x + 1);
    }
}