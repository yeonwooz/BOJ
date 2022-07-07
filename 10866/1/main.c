#include <stdio.h>
#include <string.h>
#define MAX_CMD_SIZE 18

void solve(int *stack, char *cmd);
void push_front(int *stack, int num);
void push_back(int *stack, int num);
int pop_front(int *stack);
int pop_back(int *stack);
int size(int *stack);
int empty(int *stack);
int front(int *stack);
int back(int *stack);

int top = 10000;
int bottom = 10000;

int main(void)
{
    int N;
    scanf("%d", &N);
    char cmd[MAX_CMD_SIZE] = {0, };
    int stack[20000] = {0,};

    for (int i = 0; i < N; ++i)
    {
        scanf("%s", cmd);
        solve(stack, cmd);
    }
    return (0);
}

void solve(int *stack, char *cmd)
{
    int num;
    if (strcmp(cmd, "push_back") == 0)
    {
        scanf("%d", &num);
        push_back(stack, num);
    }
    else if (strcmp(cmd, "push_front") == 0)
    {
        scanf("%d", &num);
        push_front(stack, num);
    }
    else if (strcmp(cmd, "pop_front") == 0)
        printf("%d\n", pop_front(stack));  
    else if (strcmp(cmd, "pop_back") == 0)
        printf("%d\n", pop_back(stack));  
    else if (strcmp(cmd, "size") == 0)
        printf("%d\n", size(stack));  
    else if (strcmp(cmd, "empty") == 0)
        printf("%d\n", empty(stack));  
    else if (strcmp(cmd, "front") == 0)
        printf("%d\n", front(stack));  
    else if (strcmp(cmd, "back") == 0)
        printf("%d\n", back(stack));  
}

void push_front(int *stack, int num)
{
    stack[bottom--] = num;
}

void push_back(int *stack, int num)
{
    stack[++top] = num;
}

int pop_front(int *stack)
{
    if (empty(stack))
        return (-1);
    int front_num = front(stack);
    stack[++bottom] = 0;
    return front_num;
}

int pop_back(int *stack)
{
    if (empty(stack))
        return (-1);
    int back_num = back(stack);
    stack[top--] = 0;
    return back_num;
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
    if (empty(stack))
        return (-1);
    return stack[bottom + 1];
}

int back(int *stack)
{
    if (empty(stack))
        return (-1);
    return stack[top];
}