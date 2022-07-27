#include <stdio.h>
#include <stdlib.h>

int n = 0;
int *stack;
int idx = -1;
char *answer;
int answer_idx = 0;

int init(void);
void solve(void);

int main(void)
{
    if(init())
    {
        solve();
        free(stack);
        free(answer);
    }
    return (0);
}

int init(void)
{
    scanf("%d", &n);
    if (n)
    {
        stack = (int *)malloc(sizeof(int) * n);
        answer = (char *)malloc(sizeof(char) * n * 2);
        if (!stack)
            return (0);
        for (int i = 0; i < n; ++i)
        {
            stack[i] = 0;
        }
        return (1);
    }
    return (0);
}

void solve()
{
    int loop = 1;
    int num = 1;
    while (loop <= n)
    {
        int input;
        scanf("%d", &input);
        while (idx == -1 || stack[idx] < input)
        {
            stack[++idx] = num++;
            answer[answer_idx++] = '+';
        }
        if (stack[idx] == input)
        {
            stack[idx--] = 0;
            answer[answer_idx++] = '-';
        }
        else
        {
            printf("NO");
            return ;
        }
        ++loop;
    }
    for (int i = 0; i < answer_idx; ++i)
    {
        printf("%c\n", answer[i]);
    }
}