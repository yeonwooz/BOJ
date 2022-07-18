#include <stdio.h>
#include <string.h>
#define SIZE 102

int is_balanced(char *str);

int main(void)
{
    while (1)
    {
        char str[SIZE];
        fgets(str, SIZE, stdin);
        if (strcmp(str, ".\n") == 0 || strcmp(str, ".") == 0)
            break;
        if (is_balanced(str))
            printf("yes\n");
        else
            printf("no\n");
    }
    return (0);
}

int is_balanced(char *str)
{
    int stack[SIZE] = {0,};
    int idx = -1;
    int i = 0;
    while (str[i])
    {
        if (str[i] == '(')
        {
            stack[++idx] = '(';
        }
        else if (str[i] == ')')
        {
            if (idx == -1 || stack[idx] == '[')
                return (0);
            stack[idx--] = '\0';
        }
        else if (str[i] == '[')
        {
            stack[++idx] = '[';
        }
        else if (str[i] == ']')
        {
            if (idx == -1 || stack[idx] == '(')
                return (0);
            stack[idx--] = '\0';
        }
        ++i;
    }
    return (idx == -1);
}