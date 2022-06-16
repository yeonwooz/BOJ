#include <stdio.h>
#include <stdlib.h>
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define MAX(a, b) (((a) > (b)) ? (a) : (b))
// 매크로와 배열 사용
int main(void)
{
    int cnt;
    int input;
    int min;
    int max;
    int *result;
    
    scanf("%d", &cnt);
    result = (int *)malloc(sizeof(int) * cnt);
    
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%d", &input);
        result[i] = input;
    }
    
    min = result[0];
    max = result[0];
    
    for (int i = 1; i < cnt; ++i)
    {
        min = MIN(min, result[i]);
        max = MAX(max, result[i]);
    }
    
    printf("%d %d", min, max);
}