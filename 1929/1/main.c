#include <stdio.h>
#include <math.h>

int is_prime(double num);

int main(void)
{
    double M, N;
    double num;
    scanf("%lf %lf", &M, &N);
    num = M;
    while (num <= N)
    {
        if (is_prime(num))
        {
            printf("%.0lf\n", num);
        }
        ++num;
    }
    return (0);
}

int is_prime(double num)
{
    if (num == 1)
        return (0);
    if (num == 2)
        return (1);
    int i = 2;
    while (i <= sqrt(num))
    {
        if ((int)num % i == 0)
        {
            return (0);   
        }
        ++i;
    }
    return (1); 
}