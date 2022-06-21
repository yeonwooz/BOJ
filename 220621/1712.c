#include <stdio.h>

// 시간제한이 0.35초라서 while 문을 사용하면 시간초과가 발생한다
// 판매비용이 가변비용 보다 작은지 큰지에 따라 이익이 발생할 수 있는 구조가 이미 결정되므로 -1 을 출력할 것인지 a / (c-b) 를 출력할 것인지만 선택하면 되는 문제

int main(void)
{
    long a;
    long b;
    long c;
    long x;   

    scanf("%d %d %d", &a, &b, &c);
    if ((int)c - (int)b <=0)
    {
        printf("%d", -1);
        return (0);
    }
    else
    {
        x = (int)a / ((int)c - (int)b);
        printf("%d", x + 1);
    }
}