#include <stdio.h>

int main(void)
{
    int N, M, diff, new_diff, sum;
    int deck[100] = {0,};

    scanf("%d %d", &N, &M);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &deck[i]);
    }
    diff = 299997;
    for (int i = 0; i < N - 2; ++i)
    {
        for (int j = i + 1; j < N - 1; ++j)
        {
            for (int k = j + 1; k < N; ++k)
            {
                new_diff = M - (deck[i] + deck[j] + deck[k]);
                if (new_diff >= 0 && new_diff < diff)
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