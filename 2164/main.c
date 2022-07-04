#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int N;
    int *arr;
    scanf("%d", &N);
    arr = (int *)malloc(sizeof(int) * (N + 2));
    for (int i = 0; i < N + 2; ++i)
    {
        arr[i] = i;
    }
    int i = 1;
    while (N > 1)
    {        
        int temp = arr[1];
        for (int i = 2; i < N + 1; ++i)
        {
            arr[i - 1] = arr[i];
        }
        arr[N] = temp;
        if (i % 2 != 0)
        {
            --N;
        }
        ++i;
    }
    printf("%d", arr[1]);
    return (0);
}