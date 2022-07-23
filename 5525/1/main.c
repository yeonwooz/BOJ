#include <stdio.h>
#include <string.h>

void solve(int N, int M, char *S);
int is_valid(char *S, int start, int end);
int valid_until(char *S, int start, int end);
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
    int cnt = 0;
    for (int i = 0; i < strlen(S); ++i)
    {
        int k = 0;
        if (S[i] == 'O')
        {
            continue;
        }
        while (S[i+1] == 'O' && S[i+2] == 'I')
        {
            ++k;
            if (k == N)
            {
                --k;
                ++cnt;
            }
            i +=2;
        }
        k = 0;
    }

    printf("%d", cnt);
}

// int is_valid(char *S, int start, int end)
// {
//     if (S[start] == 'O')
//         return (0);
//     int i =  start;
//     while (i <= end - 1)
//     {
//         if (S[i] == S[i+1])
//             return (0);
//         ++i;
//     }
//     return (1);
// }

int valid_until(char *S, int start, int end)
{
    if (S[start] == 'O')
        return (start);
    int i =  start;
    while (i <= end - 1)
    {
        if (S[i] == S[i+1])
            return (i);
        ++i;
    }
    return (i);
}