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

    // 시간복잡도 : for 문 두개 전체탐색 : O(n^2)
    for (int i = cnt - 1; i > 0; --i)   // 맨 오른쪽에서부터 왼쪽으로 탐색
    {
        for (int j = 0; j < i; ++j)     // 맨 왼쪽부터 i 전까지 (i 번째는 이미 정렬완료)
        {
            if (arr[j] > arr[j + 1])    // 양옆 비교후 정렬 
            {
                printf("before : [%d]=%d [%d]=%d\n", j, arr[j], j+1, arr[j+1]);
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                printf("after  : [%d]=%d [%d]=%d\n", j, arr[j], j+1, arr[j+1]);
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