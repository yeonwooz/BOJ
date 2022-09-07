#include <stdio.h>
 
int fibo[1500000];
 
int main() {
    long long int n;
    scanf("%lld", &n);
 
    fibo[0] = 0;
    fibo[1] = 1;
 
     //  피사노주기 규칙(9471번 참고) : n > 2라면, k(10n) = 15×10(n-1)
    for (int i = 2; i < 1500000; i++)
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1000000;
 
    printf("%d\n", fibo[n % 1500000]);
    return 0;
}
