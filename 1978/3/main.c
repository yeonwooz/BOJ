#include <stdio.h>

int is_prime(int num);
void solve(int N);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int num, cnt = 0;

    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &num);
        if (is_prime(num))
            ++cnt;
    }  
    printf("%d", cnt); 
}

int is_prime(int num)
{
    if (num == 1) return 0;
    if (num == 2) return 1;
    int i = 2;
    while (i * i <= num)
    {
        if (num % i == 0)
            return 0;
        ++i;
    }
    return 1;
}
