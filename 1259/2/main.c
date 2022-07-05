#include <stdio.h>
#include <string.h>

int main(void)
{
    char str[6] = {0,};
    while (1)
    {
        scanf("%s", str);
        if (str[0] == '0' && str[1] == '\0')
            break;
        int len = strlen(str);
        int i = 0;
        while (i < len / 2)
        {
            if (str[i] != str[len - 1 - i])
            {
                printf("no\n");
                break;
            }
            ++i;
        }
        if (i == len / 2)
            printf("yes\n");
    }
    return (0);
}