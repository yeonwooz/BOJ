#include <stdio.h>

int main(void)
{
    int n, m, diff, new_diff, sum;
    int deck[100] = {0,};
    scanf("%d %d", &n, &m);
    for (int i = 0; i < n; ++i)
    {
        scanf("%d", &deck[i]);
    }
    diff = 299997;
    for (int i = 0; i < n - 2; ++i)
    {
        for (int j = 1; j < n - 1; ++j)
        {
            for (int k = 2; k < n; ++k)
            {
                if (i == j || j == k || i == k)
                    continue;
                if (deck[i] + deck[j] + deck[k] > m)
                    continue;

                new_diff = deck[i] + deck[j] + deck[k] - m;
                if (new_diff < 0)
                    new_diff *= -1;
                if (new_diff < diff)
                {
                    diff = new_diff;
                    sum = deck[i] + deck[j] + deck[k];
                }
            }
        }
    }
    printf("%d", sum);
    return (0);
}