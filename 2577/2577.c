#include <stdio.h>
#include <stdlib.h>

void *digit_cnt(int *nums, char *str)
{
    for (int i = 0; i < 10; ++i)
    {
        nums[str[i] - '0']++;
    }
}

int get_len(int num, int len)
{
    if (num < 10) 
        return (len + 1);
    get_len(num / 10, len + 1);
}

void *to_str(int num, char *str, int i, int len)
{
    if (num < 10)
    {
        str[len - 1 - i] = num + '0';
        return (str);
    }
    to_str(num / 10, str, i + 1, len);
    str[len - 1 - i] = num % 10 + '0';
}

int main(void)
{
    int a;
    int b;
    int c;
    int mult;
    int length;
    char *str_num;
    int *nums;
    scanf("%d\n%d\n%d", &a, &b, &c);
    
    mult = a * b * c;
    length = get_len(mult, 0);
    str_num = (char *)malloc(sizeof(char) * (length + 1));
    to_str(mult, str_num, 0, length);
    str_num[length] = '\0';
    
    nums = (int *)malloc(sizeof(int) * 10);
    digit_cnt(nums, str_num);
    for (int i = 0; i <= 9; ++i)
    {
        printf("%d\n", nums[i]);
    }
}