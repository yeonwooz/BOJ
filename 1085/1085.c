#include <stdio.h>

int main(void)
{
    short dots[4] = {0,};
    short min;

    min = 1000;
    for (int i = 0; i < 4; ++i)
    {
        scanf("%hd", &dots[i]);

        if (dots[0] && dots[0] < min)
            min = dots[0];
        if (dots[1] && dots[1] < min)
            min = dots[1];
        if (dots[2] && dots[2] - dots[0] < min)
            min = dots[2] - dots[0];
        if (dots[3] && dots[3] - dots[1] < min)
            min = dots[3] - dots[1];
    }
    printf("%hd", min);
}