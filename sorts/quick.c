#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b)    // 오름차순 비교 함수 구현
{
    int num1 = *(int *)a;    // void 포인터를 int 포인터로 변환한 뒤 역참조하여 값을 가져옴
    int num2 = *(int *)b;    // void 포인터를 int 포인터로 변환한 뒤 역참조하여 값을 가져옴

    if (num1 < num2)    // a가 b보다 작을 때는
        return -1;      // -1 반환
    
    if (num1 > num2)    // a가 b보다 클 때는
        return 1;       // 1 반환
    
    return 0;    // a와 b가 같을 때는 0 반환
}

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

    // string.h 내장함수 qsort : 평균 시간복잡도 O(nlogn)
    qsort(arr, cnt, sizeof(int), compare);

    i = 0;
    printf("===result===\n");
    while (i < cnt)
    {
        printf("%d\n", arr[i]);
        ++i;
    }
    return (0);
}