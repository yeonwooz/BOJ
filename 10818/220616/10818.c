#include <stdio.h>
// 배열 사용하지 않음
int main(void)
{
    int cnt;
    int min;
    int max;
    int input;
    
    scanf("%d %d", &cnt, &min);
    max = min;
    
    for (int i = 1; i < cnt; ++i)
    {
        scanf("%d", &input);
        if (input > max)
            max = input;
        if (input < min)
            min = input;
    }
    printf("%d %d", min, max);
}