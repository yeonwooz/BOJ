#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int case_cnt;
    int people_cnt;
    int score;
    int sum;
    float average;
    int *scores;
    int elites_cnt;

    scanf("%d", &case_cnt);
    for (int i = 0; i < case_cnt; ++i)
    {
        scanf("%d", &people_cnt);
        sum = 0;
        scores = (int *)malloc(sizeof(int) * people_cnt);
        for (int j = 0; j < people_cnt; ++j)
        {
            scanf("%d", &score);
            scores[j] = score;
            sum += score;
        }
        average = (float)sum / (float)people_cnt;
        elites_cnt = 0;
        for (int j = 0; j < people_cnt; ++j)
        {
            if (scores[j] > average) 
                elites_cnt++;
        }
        printf("%.3f%\n", (float)elites_cnt / people_cnt * 100);
    }
}