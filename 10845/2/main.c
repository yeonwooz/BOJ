#include <stdio.h>
#include <string.h>

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
    int stack[10000] = {0,};
    int top = 0, bottom = 0;
    for (int i = 0; i < N; ++i)
    {
        char cmd[12] = "";
        
        scanf("%s", cmd);
        if (strcmp(cmd, "push") == 0)
        {
            int n;
            scanf("%d", &n);
            stack[top++] = n;
        }
        else if (strcmp(cmd, "pop") == 0)
        {   
            if (bottom == top)
            {
                printf("-1\n");
                continue;
            }
            printf("%d\n", stack[bottom]);
            stack[bottom++] = 0;
        }
        else if (strcmp(cmd, "size") == 0)
        {
            printf("%d\n", top - bottom);
        }
        else if (strcmp(cmd, "empty") == 0)
        {
            if (bottom == top)
                printf("1\n");
            else
                printf("0\n");
        }
        else if (strcmp(cmd, "front") == 0)
        {
            if (bottom == top)
            {
                printf("-1\n");
                continue;
            }
            printf("%d\n", stack[bottom]);
        }        
        else if (strcmp(cmd, "back") == 0)
        {
            if (bottom == top)
            {
                printf("-1\n");
                continue;
            }
            printf("%d\n", stack[top - 1]);
        }
    }
}