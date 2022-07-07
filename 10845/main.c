#include <stdio.h>
#include <string.h>
#define MAX_CMD_SIZE 12

void push(int *stack, int num);
int pop(int *stack);
int size(int *stack);
int empty(int *stack);
int front(int *stack);
int back(int *stack);
void solve(int *stack, char *cmd);

int top = 0;
int bottom = 0;

int main(void)
{   
    int N;
    char cmd[MAX_CMD_SIZE] = {0,};
    int stack[10000] = {0,};

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%s", cmd);
        solve(stack, cmd);
        if (i < N - 1 && strcmp(cmd, "push") != 0)
            printf("\n");
    }
    return (0);
}

void solve(int *stack, char *cmd)
{
    int num;
    if (strcmp(cmd, "push") == 0)
    {
        scanf("%d", &num);
        push(stack, num);
    }
    else if (strcmp(cmd, "pop") == 0)
    {
        printf("%d", pop(stack));
    }
    else if (strcmp(cmd, "size") == 0)
    {
        printf("%d", size(stack));
    }
    else if (strcmp(cmd, "empty") == 0)
    {
        printf("%d", empty(stack));
    }
    else if (strcmp(cmd, "front") == 0)
    {
        printf("%d", front(stack));
    }
    else if (strcmp(cmd, "back") == 0)
    {
        printf("%d", back(stack));
    }
}

void push(int *stack, int num)
{
    stack[top++] = num;
}

int pop(int *stack)
{
    if (top == bottom)
        return -1;
    int first_num = stack[bottom];
    stack[bottom++] = 0;
    return first_num;
}

int size(int *stack)
{
    return top - bottom;
}

int empty(int *stack)
{
    if (top == bottom)
        return (1);
    return (0);
}

int front(int *stack)
{
    if (top == bottom)
        return (-1);
    return stack[bottom];
}

int back(int *stack)
{
    if (top == bottom)
        return (-1);
    return stack[top - 1];
}