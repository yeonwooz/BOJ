#include <stdio.h>

int A,B,C;

int init(void);
void solve(void);
long long int modular(long long int num);

int main(void)
{
    if(init())
    {
        solve();
    }
    return (0);
}

long long int modular(long long int num){
    if (num == 1) return A % C;

    long long n = modular(num/2) % C;

    if (num % 2 == 0) return n * n % C;
    return n * n % C * A % C;
}

void solve(void) {
    printf("%lld", modular(B));
}

int init(void)
{
    scanf("%d %d %d", &A, &B, &C);
    return (1);
}
