#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    /*
    모듈러 연산의 분배법칙 (덧셈, 뺄셈, 곱셈에 대하여 성립)
    (a + b) mod c = (a mod c + b mod c) mod c
    (a - b) mod c = (a mod c - b mod c) mod c
    (a * b) mod c = (a mod c * b mod c) mod c
    */
    const int r = 31, M = 1234567891;
    int L;
    long long hash = 0, coe = 1;
    char *str;
    scanf("%d", &L);
    str = (char *)malloc(sizeof(char) * (L + 1));
    scanf("%s", str);
    
    for (int i = 0; i < L; ++i)
    {
        int num = str[i] - 'a' + 1;
        hash += num * (coe % M);
        hash %= M;
        coe *= r;
        coe %= M;   // 소수 M에 대해서 거듭제곱의 나머지는 계속 동일한 범위에서 순환하기 때문에, 다음 항에서 곱할 계수를 미리 모듈러연산 해준다. 
        /*
        가령 3의 거듭제곱을 6으로 모듈러연산한다면
        3 mod 13 = 3
        9 mod 13 = 9
        27 mod 13 = 1
        81 mod 13 = 3
        243 mod 13 = 9

        */
    }
    printf("%lld", hash % M);
    return (0);
}