#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int cnt;
    int *arr;
    int i;
    int temp;

    scanf("%d", &cnt);
    arr = (int *)malloc(sizeof(int) * cnt);

    i = 0;
    while (i < cnt)
    {
        arr[i] = cnt - i;
        ++i;
    }

    for (int i = 0; i < cnt - 1; ++i)  
    {
        for (int j = i + 1; j < cnt; ++j)     
        {
            if (arr[i] > arr[j])  
            {
                printf("before : [%d]=%d [%d]=%d\n", i, arr[i], j, arr[j]);
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                printf("after  : [%d]=%d [%d]=%d\n", i, arr[i], j, arr[j]);
            }
        }
    }

    i = 0;
    printf("===result===\n");
    while (i < cnt)
    {
        printf("%d\n", arr[i]);
        ++i;
    }
    return (0);
}