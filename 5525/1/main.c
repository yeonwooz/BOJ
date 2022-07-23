#include <stdio.h>
#include <string.h>

void solve(int N, int M, char *S);
int is_valid(char *S, int start, int end);

int main(void)
{
    int N, M;
    char S[1000001] = {0,};

    scanf("%d\n%d\n%s", &N, &M, S);
    solve(N, M, S);

    return (0);
}

void solve(int N, int M, char *S)
{
    int end = 2 * N, cnt = 0;
    for (int i = end; i < strlen(S); ++i)
    {
        // printf("end=%d start=%d\n", end, i - 2 * N);
        if (is_valid(S, i - 2 * N, i))
            ++cnt;
    }
    printf("%d", cnt);
}

int is_valid(char *S, int start, int end)
{
    if (S[start] == 'O')
        return (0);
    int i =  start;
    while (i <= end - 1)
    {
        if (S[i] == S[i+1])
            return (0);
        ++i;
    }
    return (1);
}

