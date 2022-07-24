#include <stdio.h>

void solve(int, int);
int is_prime(int);

int main(void)
{
    int M, N;

    scanf("%d %d", &M, &N);
    solve(M, N);
    return (0);
}

void solve(int M, int N)
{
    for (int i = M; i <= N; ++i)
    {
        if (is_prime(i))
            printf("%d\n", i);
    }
}

int is_prime(int num)
{
    if (num == 1)
        return (0);
    if (num == 2)
        return (1);
    int i = 2;
    while (i * i <= num)
    {
        if (num % i == 0)
            return (0);
        ++i;
    }
    return (1);
}