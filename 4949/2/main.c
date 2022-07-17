#include <stdio.h>
#include <string.h>

int is_balanced(char *str);

int main(void)
{
    while (1)
    {
        char str[101] = {0,};
        gets(str);
        if (strcmp(str, ".") == 0)
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
    int queue[101] = {0,};
    int idx = -1;
    int i = 0;
    while (str[i])
    {
        if (str[i] == '(')
        {
            queue[++idx] = '(';
        }
        else if (str[i] == ')')
        {
            if (idx == -1 || queue[idx] == '[')
                return (0);
            queue[idx--] = '\0';
        }
        else if (str[i] == '[')
        {
            queue[++idx] = '[';
        }
        else if (str[i] == ']')
        {
            if (idx == -1 || queue[idx] == '(')
                return (0);
            queue[idx--] = '\0';
        }
        ++i;
    }
    return (idx == -1);
}