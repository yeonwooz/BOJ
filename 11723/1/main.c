#include <stdio.h>
#include <string.h>

void solve(int *set);
int main(void)
{
    int M;
    int set[21] = {0, };

    scanf("%d", &M);
    for (int i = 0; i < M; ++i)
        solve(set);
    return (0);
}

void solve(int *set)
{
    char str[7] = {0,};
    int target = 0;

    scanf("%s", str);
    if (strcmp(str, "all"))
    {
        scanf("%d", &target);
    }

    if (!strcmp(str, "add"))
    {
        if (!set[target])
            set[target] = 1;
    }
    else if (!strcmp(str, "remove"))
    {
        if (set[target])
            set[target] = 0;
    }
    else if (!strcmp(str, "check"))
    {
        if (set[target])
            printf("1\n");
        else 
            printf("0\n");
    }
    else if (!strcmp(str, "toggle"))
    {
        if (set[target])
            set[target] = 0;
        else
            set[target] = 1;
    }
    else if (!strcmp(str, "all"))
    {
        for (int i = 1; i <= 20; ++i)
        {
            if (!set[i])
                set[i] = 1;
        }
    }
    else if (!strcmp(str, "empty"))
    {
        for (int i = 1; i <= 20; ++i)
        {
            if (set[i])
                set[i] = 0;
        }
    }    
}

