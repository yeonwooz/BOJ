#include <stdio.h>

int main(void)
{
    int A, B, V, days;

    scanf("%d %d %d", &A, &B, &V);
    if ((V - A) % (A - B) == 0)
        days = (V - A) / (A - B) + 1;
    else 
        days = (V - A) / (A - B) + 2;
    printf("%d", days);
    return (0);
}