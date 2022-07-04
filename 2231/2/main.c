#include <stdio.h>

int compose(int n)
{   
    int dig_sum = 0;
    int num = n;
    while (num) {
        dig_sum += num % 10;
        num /= 10;
    }
    return (n + dig_sum);
}

int main() {
    int n;
    int target;
    
    scanf("%d", &n);
    target = 1;
    while (target <= 1000000)
    {
        if (compose(target) == n)
        {
            printf("%d", target);
            return (0);
        }
        ++target;
    }
    printf("0");
    return (0);
}