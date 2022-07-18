#include <stdio.h>

void solve(int T);
int is_valid(char *str);

int main(void)
{
    int T;

    scanf("%d", &T);
    solve(T);
    return (0);
}
void solve(int T)
{
    for (int i = 0; i < T; ++i)
    {
        char str[51] = {0,};
        scanf("%s", str);
        if (is_valid(str))
            printf("YES\n");
        else   
            printf("NO\n");
            
    }
}

int is_valid(char *str)
{
    char stack[51] = {0,};
    int idx = -1;
    int i = 0;
    while (str[i])
    {
        if (str[i] == '(')
            stack[++idx] = '(';
        else
        {
            if (idx == -1)
                return (0);
            stack[idx--] = '\0';
        }
        ++i;
    }
    return (idx == -1);
}