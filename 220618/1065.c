#include <stdio.h>

int is_seq(int num, int prev_diff)
{
    int diff;
    if (num < 10)
        return (1);
    diff = (num % 10) - ((num / 10) % 10);
    if (diff != prev_diff)
        return (0);
    return (is_seq(num / 10, diff));
}

int main(void)
{
    int n;
    int diff;
    int nums[1001] = {0,};
    int cnt;

    scanf("%d", &n);
    for (int i = 1; i <= n; ++i)
    {
        diff = (i % 10) - ((i / 10) % 10);
        if (is_seq(i, diff)) 
        {
            nums[i] = i;
        }
    }
    cnt = 0;
    for (int i = 1; i <= n; ++i)
    {
        if (nums[i] != 0)
            cnt++;
    }
    printf("%d", cnt);
}