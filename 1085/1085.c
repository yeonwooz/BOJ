#include <stdio.h>

int main(void)
{
    short dot[4] = {0,};
    short min;

    min = 1000;
    for (int i = 0; i < 4; ++i)
    {
        scanf("%hd", &dot[i]);

        if (dot[0] && dot[0] < min)
            min = dot[0];
        if (dot[1] && dot[1] < min)
            min = dot[1];
        if (dot[2] && dot[2] - dot[0] < min)
            min = dot[2] - dot[0];
        if (dot[3] && dot[3] - dot[1] < min)
            min = dot[3] - dot[1];
    }
    printf("%hd", min);
}