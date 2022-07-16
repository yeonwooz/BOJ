#include <stdio.h>

void solve(int N);
int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}


void solve(int N)
{
    int queue[1000001] = {0,};

    for (int i = 1; i <= N; ++i)
    {
        queue[i] = i;
    }
    int bottom = 1;
    int top = N + 1;

    while (bottom < top - 1)
    {
        if (bottom % 2 == 0) 
            queue[top++] = queue[bottom];
        queue[bottom++] = 0;
    }
    printf("%d", queue[bottom]);
}