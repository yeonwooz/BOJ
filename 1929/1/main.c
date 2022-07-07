#include <stdio.h>

int main(void)
{
    int M, N, num;
    scanf("%d %d", &M, &N);
    if (M == 1)
        num = 2;
    else    
        num = M;

    while (num <= N)
    {
        int i = 2;
        int is_prime = 1;
        while (i * i <= num)
        {
            if (num % i == 0)
            {
                is_prime = 0;
                break;
            }
            ++i;
        }
        if (is_prime)
            printf("%d\n", num);
        ++num;
    }

    return (0);
}