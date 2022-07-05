#include <stdio.h>

int main(void)
{
    int a, b, gcd, lcm;
    scanf("%d %d", &a, &b);

    int i = 1;
    while (i <= 10000)
    {
        if (i > a || i > b)
            break;
        if (a % i == 0 && b % i == 0)
            gcd = i;
        ++i;
    }
    lcm = gcd * (a / gcd) * (b / gcd);
    printf("%d\n%d", gcd, lcm);
    return (0);
}