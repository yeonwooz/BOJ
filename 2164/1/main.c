#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int N;
    int *arr;
    scanf("%d", &N);
    arr = (int *)malloc(sizeof(int) * (N + 1) * 2);
    for (int i = 0; i < N + 1; ++i)
    {
        arr[i] = i;
    }
    int index = N;
    int i = 1;
    while (1)
    {
        if (arr[index - 1] == 0 && arr[index + 2] == 0)
            break;
        if (i % 2 == 0) 
        {
            ++index;
            arr[index] = arr[i];
        }
        arr[i] = 0;
        ++i;
    }
    printf("%d", arr[index]);    
    return (0);
}