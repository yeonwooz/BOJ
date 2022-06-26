#include <stdio.h>

int tri_six(int num)
{
    int cnt;
    
    cnt = 0;
    while (num >= 10)
    {
        if (num % 10 == 6)
            ++cnt;
        else 
            cnt = 0;
        num /= 10;
        if (cnt == 3)
            return (1);
    }
    if (num == 6 && cnt == 2)
        return (1);
    if (cnt < 3)
        return (0);
}

int main(void) {
    int n;
    int i;
    int serial;

    i = 0;
    serial = 0;
    scanf("%d", &n);
    while (1)
    {
        if (tri_six(i))
        {
            --n;
            serial = i;
        }
        if (n == 0)
            break;
        ++i;
    }
    printf("%d", serial);
    return 0;
}