#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b);

typedef struct dot
{
    int x;
    int y;
} Dot;

int main(void)
{
    int N, x, y;
    Dot dots[100000] = {0,};

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d %d", &x, &y);
        dots[i].x = x;
        dots[i].y = y;
    }
    return (0);
}

int compare(const void *a, const void *b)
{
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if 
}