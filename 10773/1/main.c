#include <stdio.h>

int main(void)
{
    int K, num, sum = 0;
    int stack[100000] = {0, };
    int top = -1;

    scanf("%d", &K);

    for (int i = 0; i < K; ++i)
    {
        scanf("%d", &num);
        if (num > 0)
        {
            stack[++top] = num;
            sum += num;
        }
        else 
        {
            int top_num = stack[top];
            stack[top--] = 0;
            sum -= top_num;
        }
    }
    printf("%d", sum);
    return (0);
}