#include <stdio.h>

int main(void)
{
    int a = 0, b = 0, gcd = 0, lcm = 0;

    scanf("%d %d", &a, &b);

    for(int i = 1; i < 10000; ++i)
    {
        if (i > a || i > b)
            break;
        if (a % i == 0 && b % i == 0)
            gcd = i;
        lcm = gcd * (a / gcd) * (b / gcd);
    }
    printf("%d\n%d", gcd, lcm);
    return (0);
}