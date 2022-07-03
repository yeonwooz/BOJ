#include <stdio.h>

typedef struct rank
{
    int x;
    int y;
} Rank;

int main(void)
{
    int N, x, y, rank;
    Rank ranks[50];

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d %d", &x, &y);
        ranks[i].x = x;
        ranks[i].y = y;
    }

    for (int i = 0; i < N; ++i)
    {
        rank = 1;
        for (int j = 0; j < N; ++j)
        {
            if (i == j)
                continue;
            if (ranks[j].x > ranks[i].x && ranks[j].y > ranks[i].y)
                ++rank;
        }
        printf("%d", rank);
        if (i < N - 1)
            printf(" ");
    }
    return (0);
}