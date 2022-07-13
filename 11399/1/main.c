#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b);

int main(void)
{
    int N;
    int times[1001] = {0,};
    scanf("%d", &N);
    for (int i = 1; i <= N; ++i)
    {
        scanf("%d", &times[i]);
    }
    qsort(times, N+1, sizeof(int), cmp);

    int sum = 0;
    for (int i = 1; i <= N; ++i)
    {
        sum += times[i] * (N + 1 - i);
    }
    printf("%d", sum);
    return (0);
}

int cmp(const void *a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;
    return (num1 - num2);
}