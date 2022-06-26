#include <stdio.h>

int compose(int n)
{   
    int dig_sum = 0;
    int num = n;
    while (num >= 10)
    {
        dig_sum += num % 10;
        num /= 10;
    }
    dig_sum += num;
    return (n + dig_sum);
}

int main() {
    int arr[1000001] = {0, };
    int n;
    int target;
    for (int i = 1; i < 1000001; ++i)
    {
        arr[i] = compose(i);
    }
    
    scanf("%d", &n);
    target = 1;
    while (target <= 1000000)
    {
        if (arr[target] == n)
        {
            printf("%d", target);
            return (0);
        }
        ++target;
    }
    printf("0");
    return (0);
}