#include <stdio.h>
#include <stdlib.h>
#define R 31
#define M 1234567891

int main(void)
{
    int L;
    char str[51];
    long long H;
    long long r;

    scanf("%d", &L);
    scanf("%s", str);
    str[L+1] = '\0';
    
    r = 1;
    H = 0;
    for (int i = 0; i < L; ++i)
    {
        H += ((str[i] - 'a' + 1) * r) % M;
        H %= M;
        r *= R;
        r %= M;
    }
    printf("%lld", H % M);
    return (0);
}