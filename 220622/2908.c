#include <stdio.h>

int main(void)
{
    char    c;
    char    a[3];
    char    b[3];

    for (int i = 0; i < 7; ++i)
    {
        scanf("%c", &c);
        if (i < 3)
            a[i] = c;
        else if (i >= 4 && i < 7)
            b[i - 4] = c;
    }
    for (int i = 2; i >= 0; --i)
    {
        if (a[i] > b[i])
        {
            printf("%d%d%d",a[2] - 48, a[1] - 48, a[0] - 48);
            return (0);
        }
        else if (a[i] < b[i])
        {
            printf("%d%d%d",b[2] - 48, b[1] - 48, b[0] - 48);
            return (0);
        }
    }
    return (0);
}