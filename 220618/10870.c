#include <stdio.h>

int fibo(int num)
{
    if (num <= 1)
        return (num);
    return (fibo(num - 2) + fibo(num - 1));
}

int main(void)
{
    int num;

    scanf("%d", &num);
    printf("%d", fibo(num));
}