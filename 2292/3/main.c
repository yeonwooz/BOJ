#include <stdio.h>

int main(void) {
    
    int min, max, N, step;

    scanf("%d", &N);
    step = 0;
    min = 1;
    max = 1;
    while (1)
    {
        if (min <= N && N <= max)
            break;
        step++;
        min = max + 1;
        max += 6 * step;
    }
    printf("%d", step + 1);
    return 0;
}