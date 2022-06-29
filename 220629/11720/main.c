#include <stdio.h>
#include <string.h>

int get_sum(char *str, int len)
{
    unsigned long long sum = 0;
    for (int i = 0; i < len; ++i)
    {
        sum += str[i] - '0';
    }
    return (sum);
}

int main(void)
{
    int N;
    char str[100] = {0,};
    unsigned long long sum;
    
    scanf("%d", &N);
    scanf("%s", str);
    sum = get_sum(str, strlen(str));
    printf("%lld", sum);
    return (0);
}