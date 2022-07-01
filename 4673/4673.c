#include <stdio.h>
#include <stdlib.h>

// 생성자함수로 만든 결과값들을 배열에 담는다(10000 까지)
// 배열에 없는 수들을 한줄씩 출력한다 
int digit_sum(int num, int sum)
{
    if (num < 10)
    {
        sum += num;
        return (sum);
    }
    sum += num % 10;
    digit_sum(num / 10, sum);
}

int produce(int num)
{
    return num + digit_sum(num, 0);
}

int main(void)
{
    int *results;
    int self_nums[10001] =  {0, };
    int target;

    results = (int *)malloc(sizeof(int) * 10001);
    results[0] = 0;
    for (int i = 1; i <= 10000; ++i)
    {
        results[i] = produce(i);
    }

    for (int i = 1; i <= 10001; ++i)
    {
        for (int j = 1; j <= 10001; ++j)
        {
            if (results[j] == i)
                break;
            if (j == 10001)
                self_nums[i] = i;
        }
    }

    for (int i = 1; i <= 10000; ++i)
    {
        target = self_nums[i];
        if (target <= 10000 && target != 0) 
            printf("%d\n", target);
    }

}