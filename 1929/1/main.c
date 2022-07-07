#include <stdio.h>
#include <math.h>

int is_prime(float num);

int main(void)
{
    float M, N;
    float num;
    scanf("%f %f", &M, &N);
    num = M;
    while (num <= N)
    {
        if (is_prime(num))
        {
            printf("%.0f\n", num);
        }
        ++num;
    }
    return (0);
}

int is_prime(float num)
{
    if (num <= 2)
        return (0);
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