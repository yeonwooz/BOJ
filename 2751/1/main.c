#include <stdio.h>

int main(void)
{
    int N, num;
    int pos[1000001] = {0, };
    int neg[1000001] = {0, };

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &num);
        if (num >= 0)
            pos[num]++;
        else
            neg[-1 * num]++;
    }
    for (int i = 1000000; i > 0; --i)
    {
        if (neg[i])
        {
            printf("%d\n", -1 * i);
        }
    }
    for (int i = 0; i < 1000001; ++i)
    {
        if (pos[i])
        {
            printf("%d\n", i);
        }
    }
    return (0);
}