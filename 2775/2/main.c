#include <stdio.h>

int rec(int k, int n);

int main(void)
{
    int T, k, n;
    scanf("%d", &T);

    for (int i = 0; i < T; ++i)
    {
        scanf("%d\n%d", &k, &n);
        printf("%d", rec(k, n));
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}

int rec(int k, int n)
{
    if (k == 0)
        return (n);
    int sum = 0, i = 1;
    while (i <= n)
    {
        sum += rec(k - 1, i);
        ++i;
    }
    return (sum);
}