#include <stdio.h>
#include <stdlib.h>

typedef struct _Dot
{
    int x;
    int y;
} Dot;

void solve(int N);
void print(Dot *dots, int N);
int cmp(const void *a, const void *b);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    Dot *dots;
    dots = (Dot *)malloc(sizeof(Dot) * N);
    for (int i = 0; i < N; ++i)
    {
        int x, y;
        scanf("%d %d", &x, &y);
        dots[i].x = x;
        dots[i].y = y;
    }
    qsort(dots, N, sizeof(Dot), cmp);
    print(dots, N);
}

void print(Dot *dots, int N)
{
    for (int i = 0; i < N; ++i)
        printf("%d %d\n", dots[i].x, dots[i].y);
}

int cmp(const void *a, const void *b)
{
    Dot dot1 = *(Dot *)a;
    Dot dot2 = *(Dot *)b;
    if (dot1.x == dot2.x)
        return (dot1.y > dot2.y);
    return (dot1.x > dot2.x);
}