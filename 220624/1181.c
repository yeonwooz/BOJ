#include <stdio.h>

int len(char *str)
{
    int i;

    i  = 0;
    while (*(str + i))
        ++i;
    return (i);
}

int main(void)
{
    int cnt;
    int str[51] = {0, };

    scanf("%d", &cnt);
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%s", str);
    }
    printf("%s", str);

}