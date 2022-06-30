#include <stdio.h>

int main(void)
{
    int N, idx, score, cnt;
    char str[80] = {0,};

    scanf("%d", &N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%s", str);
        idx = 0;
        score = 0;
        cnt = 0;
        while (*(str + idx))
        {
            if (*(str + idx) == 'O')
            {
                cnt++;
                score += cnt;
            }
            else
            {
                cnt = 0;
            }
            ++idx;
        }
        printf("%d\n", score);
    }
    return (0);
}