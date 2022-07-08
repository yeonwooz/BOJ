#include <stdio.h>

int solve();

int main(void)
{
    int T;
    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        printf("%d", solve());
        if (i < T - 1)
            printf("\n");
    }
    return (0);
}

int solve()
{
    int N, M;

    scanf("%d %d", &N, &M);
    int queue[200] = {0,};
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &queue[i]);
    }
    if (N == 1)
        return 1;
    int bottom = 0;
    int top = N - 1;
    int printed_cnt = 0;   
    while (bottom <= top)
    {
        int i = 0;
        while (i <= top)
        {
            if (queue[bottom] < queue[i])
                break;
            ++i;
        }
        if (i == top + 1)
        {
            // pop out
            ++printed_cnt;
            if (bottom == M)
            {
                break;
            }
            queue[bottom++] = 0;
        }
        else 
        {
            // go to back
            queue[++top] = queue[bottom];
            if (bottom == M)
            {
                M = top;
            }
            queue[bottom++] = 0;    
        }
    }
    return printed_cnt;
}