#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int cnt;
    char *num;
    int sum;
    
    scanf("%d", &cnt);
    num = (char *)malloc(sizeof(char) * (cnt + 1));
    scanf("%s", num);
    sum = 0;
    for (int i = 0; i < cnt; ++i)
    {
        sum += num[i] - '0';
    }
    printf("%d", sum);
}