#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(void)
{
    int cnt;
    int *arr;
    int i;
    int temp;
    int index;
    int min;


    scanf("%d", &cnt);
    arr = (int *)malloc(sizeof(int) * cnt);

    i = 0;
    while (i < cnt)
    {
        arr[i] = cnt - i;
        ++i;
    }

    // 시간복잡도 : for 문 두개 전체탐색 : O(n^2)
    for (int i = 0; i < cnt; ++i)
    {
        min = INT_MAX;
        for (int j = i; j < cnt; ++j)
        {
            if (arr[j] < min)     // 최소값 (혹은 최대값) 의 인덱스를 구해서 현재 [i] 의 값과 교체하여 가장 왼쪽 (혹은 가장 오른쪽)으로 보낸다
            {
                printf("before : [%d]=%d min=%d\n", j, arr[j], min);
                min = arr[j];
                index = j;
                printf("after  : [%d]=%d min=%d\n", j, arr[j], min);
            }
        }
        temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
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