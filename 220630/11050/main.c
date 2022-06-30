#include <stdio.h>

int main(void)
{
    int N, K;
    int coef;
    scanf("%d %d", &N, &K);

    coef = 1;
    for (int i = N - K + 1; i <= N; ++i)
    {
        coef *= i;
    }
    for (int i = 1; i <= K; ++i)
    {
        coef /= i;
    }
    printf("%d", coef);
    return (0);
}