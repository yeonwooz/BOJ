#include <stdio.h>
#define MIN(a,b) a < b ? a : b

int main(void)
{
    int N;

    scanf("%d", &N);
    int two_cnt = 0;
    int five_cnt = 0;
    
    for (int i = 1; i <= N; ++i)
    {
        if (i % 2 == 0)
        {
            int j = i;
            while (j % 2 == 0)
            {
                ++two_cnt;
                j /= 2;
            }
        }
        if (i && i % 5 == 0)
        {
            int j = i;
            while (j && j % 5 == 0)
            {
                ++five_cnt;
                j /= 5;
            }
        }
    }
    printf("%d", MIN(two_cnt, five_cnt));
    return (0);
}
