#include <stdio.h>

int main(void)
{
    short N, three_cnt, five_cnt;
    scanf("%hd", &N);

    three_cnt = five_cnt = 0;
    while (five_cnt * 5 < N)
        ++five_cnt;
    if (five_cnt * 5 == N)
    {
        printf("%hd", five_cnt);
        return (0);
    }

    while (five_cnt >= 0)
    {
        while (three_cnt * 3 + five_cnt * 5 < N)
            ++three_cnt;
        if (three_cnt * 3 + five_cnt * 5 == N)
        {
            printf("%d", five_cnt + three_cnt);
            return (0);  
        }
        --five_cnt;
    }
    printf("-1");
    return (0);
}