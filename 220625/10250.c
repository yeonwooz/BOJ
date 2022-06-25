#include <stdio.h>

int main(void)
{
    int cnt;
    scanf("%d", &cnt);

    int h;
    int w;
    int n;
    int x;
    int y;

    for (int i = 0; i < cnt; ++i)
    {
        scanf("%d", &h);
        scanf("%d", &w);
        scanf("%d", &n);

        x = 1;
        y = 0;
        for (int j = 0; j < n; ++j)
        {
            if (y == h)
            {
                y = 1;
                x++;
            }
            else if (y < h)
            {
                y++;
            }
        }
            printf("%d", y);
            printf("%d", x / 10);
            printf("%d\n", x % 10);
    }
}