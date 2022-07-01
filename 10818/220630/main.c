#include <stdio.h>
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define MAX(a, b) (((a) > (b)) ? (a) : (b))

int main(void)
{
    int N, num, min = 1000001, max = -1000001;

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &num);
        min = MIN(min, num);
        max = MAX(max, num);
    }
    printf("%d %d", min, max);
    return (0);
}