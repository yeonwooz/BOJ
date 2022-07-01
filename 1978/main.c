#include <stdio.h>
#include <math.h>

int is_prime(int num)
{
    int i;
    
    if (num < 2)
        return (0);
    i = 2;
    while (i <= sqrt(num))
    {
        if (num % i == 0)
            return (0);
        ++i;
    }
    return (1);
}

int main(void)
{
    int N;
    int num;
    int cnt;

    scanf("%d", &N);
    cnt = 0;

    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &num);
        if (is_prime(num) == 1)
            ++cnt;
    }  
    printf("%d", cnt); 
    return (0);
}