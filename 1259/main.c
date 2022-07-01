#include <stdio.h>

int is_palindrome(char *str, int len)
{
    int i = 0;
    while (i < len / 2)
    {
        if (str[i] != str[len - 1 - i])
            return (0);
        ++i;
    }
    return (1);
}

int len(int num)
{
    int i = 0;
    while (num > 0)
    {
        ++i;
        num /= 10;
    }
    return (i);
}

void num_str(int num, char *str, int len)
{
    int i = 0;
    while (num > 0)
    {
        str[len - 1 - i] = num % 10 + '0';
        ++i;
        num /= 10;
    }
}

int main(void)
{
    int num;
    char str[5];

    while (1)
    {
        scanf("%d", &num);
        if (!num)
            break;
        num_str(num, str, len(num));
        if (is_palindrome(str, len(num)))
            printf("yes\n");
        else
            printf("no\n");
    }
    return (0);
}