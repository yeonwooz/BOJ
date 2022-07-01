#include <stdio.h>

int main(void)
{
    int A;
    int B;

    while (scanf("%d %d", &A, &B) == 2)
    {
        printf("%d\n", A + B);
    }
    return (0);
}