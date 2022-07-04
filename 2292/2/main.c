#include <stdio.h>

int main(void) {
    
    int min;
    int max;
    int n;
    int step;

    scanf("%d", &n);
    step = 0;
    min = 1;
    max = 1;
    while (1)
    {
        if (min <= n && n <= max)
            break;
        step++;
        min = max + 1;
        max = max + 6 * step;
    }
    printf("%d", step + 1);
    return 0;
}