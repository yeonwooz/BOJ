#include <stdio.h>
#include <string.h>
#define MAX_DEQUE_LEN 20000
#define MAX_CMD_STRLEN 18

void solve(int N);
void push_front(int X);
void push_back(int X);
int pop_front();
int pop_back();
int size();
int empty();
int front();
int back();

int deq[MAX_DEQUE_LEN] = {0,};
int top = 10000, bottom = 10000;

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    for (int i = 0; i < N; ++i)
    {
        char cmd[MAX_CMD_STRLEN] = "";
        scanf("%s", cmd);
        if (strcmp(cmd, "push_front") == 0)
        {
            int x;
            scanf("%d", &x);
            push_front(x);
        }
        else if (strcmp(cmd, "push_back") == 0)
        {
            int x;
            scanf("%d", &x);
            push_back(x);
        }
        else if (strcmp(cmd, "pop_front") == 0)
            printf("%d\n", pop_front());
        else if (strcmp(cmd, "pop_back") == 0)
            printf("%d\n", pop_back());
        else if (strcmp(cmd, "size") == 0)
            printf("%d\n", size());
        else if (strcmp(cmd, "empty") == 0)
            printf("%d\n", empty());
        else if (strcmp(cmd, "front") == 0)
            printf("%d\n", front());
        else if (strcmp(cmd, "back") == 0)
            printf("%d\n", back());
    }
}

void push_front(int X)
{
    deq[bottom--] = X;
}

void push_back(int X)
{
    deq[++top] = X;
}

int pop_front()
{
    if (empty())
        return (-1);
    int popped = deq[++bottom];
    return popped;
}

int pop_back()
{
    if (empty())
        return (-1);
    int popped = deq[top--];
    return popped;
}

int size()
{
    return (top - bottom);
}

int empty()
{
    if (bottom == top)
        return (1);
    return (0);
}

int front()
{
    if (empty())
        return (-1);
    return deq[bottom + 1];
}

int back()
{
    if (empty())
        return (-1);
    return deq[top];
}

