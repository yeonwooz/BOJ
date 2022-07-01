#include <stdio.h>
#include <stdlib.h>

int    main(void)
{
    int    cnt;
    int    max;
    int    origin;
    int    *scores;
    float    sum;
    
    scanf("%d", &cnt);
    scores = (int *)malloc(sizeof(int) * cnt);
    max = 0;
    for (int i = 0; i < cnt; ++i)
    {
        scanf("%d", &origin);
        if (origin > max)
            max = origin; 
        scores[i] = origin;
    }
    sum = 0;
    for (int i = 0; i < cnt; ++i)
    {
        sum += (float)scores[i] / max * 100;
    }
    printf("%.2f", sum / cnt);
}