#include <stdio.h>
#include <string.h>

void push(int *stack, int num);
int pop(int *stack); // 성공시 pop된 정수 리턴,  실패시 -1 리턴
int size(int *stack); // stack size 리턴
int empty(int *stack); // 스택이 비어있으면 1, 아니면 0을 출력
int top(int *stack); // 스택이 비어있으면 -1 리턴, 스택의 가장 위에 있는 정수를 출력

int top_idx = -1;

int main(void)
{
    int N;
    char str[6] = "";
    int stack[10000] = {0,};
    scanf("%d\n", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%s", str);
        if (strcmp(str, "top") == 0)
            printf("%d\n", top(stack));
        else if (strcmp(str, "size") == 0)
            printf("%d\n", size(stack));
        else if (strcmp(str, "empty") == 0)
            printf("%d\n", empty(stack));
        else if (strcmp(str, "pop") == 0)
            printf("%d\n", pop(stack));
        else if (strcmp(str, "push") == 0)
        {
            int num;
            scanf("%d", &num);
            push(stack, num);
        }
    }
}

void push(int *stack, int num)
{
    stack[++top_idx] = num;
}

int pop(int *stack)
{
    if (empty(stack))
        return (-1);
    int top_val = stack[top_idx];
    stack[top_idx--] = 0;
    return (top_val);
}

int size(int *stack)
{
    return top_idx + 1;
}

int empty(int *stack)
{
    if (stack[0] > 0)
        return (0);
    else 
        return (1);
}

int top(int *stack)
{
    if (empty(stack))
        return (-1);
    return stack[top_idx];
}
