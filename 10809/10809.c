#include <stdio.h>
#include <stdlib.h>

int str_len(char *str)
{
    int i;

    i = 0;
    while (str[i]) 
        ++i;
    return (i);
}

int main(void)
{
    char *str;
    char target;
    int index;

    str = (char *)malloc(sizeof(char) * 100);
    scanf("%s", str);  // scanf() automatically appends the null character
    target = 'a';

    while (target <= 'z')
    {
        index = -1;
        for (int i = 0; i < str_len(str); ++i)
        {
            if (str[i] == target) 
            {
                index = i;
                break;
            }
        }
        printf("%d ", index);
        ++target;
    }
}