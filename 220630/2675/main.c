#include <stdio.h>

int main(void)
{
    int T, R, idx;
    char S[21];

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        scanf("%d %s", &R, S);
        idx = 0;
        while (S[idx])
        {
            for (int j = 0; j < R; ++j)
            {
                printf("%c", S[idx]);
            }
            ++idx;
        }
        printf("\n");

    }
    return (0);
}