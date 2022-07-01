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
    qsort(dots, N, sizeof(dots[0]), compare);
    for (int i = 0; i < N; ++i)
    {
        printf("%d %d\n", dots[i].x, dots[i].y);
    }
    return (0);
}

int compare(const void *a, const void *b)
{
    Dot dotA = *(Dot *)a;
    Dot dotB = *(Dot *)b;

    if (dotA.x < dotB.x)
        return (-1);
    else if (dotA.x > dotB.x)
        return (1);  
    else 
    {
        if (dotA.y < dotB.y)
            return (-1);  
        else if (dotA.y > dotB.y)     
            return (1); 
    }  
    return (0);
}