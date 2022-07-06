#include <stdio.h>
#include <stdlib.h>
#define STACK_SIZE 100000

char result[2 * STACK_SIZE] = "";
int stack[STACK_SIZE];
int top_idx = -1;

int main(void)
{
    int n, cur;
    int *seq;
    int result_idx = 0;
    scanf("%d", &n);
    seq = (int *)malloc(sizeof(int) * n);

    for (int i = 0; i < n; ++i)
    {
        scanf("%d", &seq[i]);
    }

    int i = 0;
    int cur_num = 1;
    while (1)
    {
        if (top_idx == -1 || stack[top_idx] < seq[i])
        {
            stack[++top_idx] = cur_num++;
            result[result_idx++] = '+';
        }
        else if (stack[top_idx] == seq[i])
        {
            top_idx--;
            result[result_idx++] = '-';
            ++i;
        }
        else 
        {
            printf("NO");
            return (0);
        }
        if (result_idx == n * 2) break;
    }

    for (int i = 0; i < n * 2; ++i)
    {
        printf("%c", result[i]);
        if (i < n * 2 - 1)
           printf("\n"); 
    }
    return (0);
}