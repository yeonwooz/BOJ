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
    int idx = -1;
    for(int i = 0; i < N; ++i)
    {
        char cmd[12] = "";
        int num;
        scanf("%s", cmd);
        if (strcmp(cmd, "push") == 0)
        {
            scanf("%d", &num);
            stack[++idx] = num;
        }
        else if (strcmp(cmd, "pop") == 0)
        {
            if (idx == -1)
                printf("-1\n");
            else
            {
                printf("%d\n", stack[idx]);
                stack[idx--] = 0;
            }
        }
        else if (strcmp(cmd, "size") == 0)
        {
            printf("%d\n", idx + 1);
        }
        else if (strcmp(cmd, "empty") == 0)
        {
            if (idx == -1)
                printf("1\n");
            else
                printf("0\n");
        }
        else if (strcmp(cmd, "top") == 0)
        {
            if (idx == -1)
                printf("-1\n");
            else
                printf("%d\n", stack[idx]);
        }
    }
}