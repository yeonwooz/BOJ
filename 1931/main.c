#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int compare(const void *a, const void *b);
// TODO: 종료시간 기준으로 정렬해보기
typedef struct 
{
    int start;
    int duration;
} Meet;

int main(void)
{
    int N, start, end, max_cnt = 0, fin_time = 0;
    Meet *meets;

    scanf("%d", &N);
    meets = (Meet *)malloc(sizeof(meets[0]) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d %d", &start, &end);
        if (fin_time < end)
            fin_time = end;
        meets[i].start = start;
        meets[i].duration = end - start;
    }
    qsort(meets, N, sizeof(meets[0]), compare);
    
    // for (int i = 0; i < N; ++i)
    // {
    //     printf("%d ", meets[i].start);
    //     printf("%d \n", meets[i].duration);
    // }

    int cur_time = 0;
    int index = 0;
    while (index < N - 1)
    {
        while (meets[index].start > cur_time)
            ++index;
        int duration = INT_MAX;
        while (meets[index].start == cur_time)
        {
            if (meets[index].duration < duration)
            {
                duration = meets[index].duration;
                cur_time += duration;
                ++max_cnt;
            }
        }
        printf("cur_time=%d\n", cur_time);
        printf("index=%d\n", index);
        printf("duration=%d\n", duration);
        ++index;
    }
    printf("%d", max_cnt);
    return (0);
}

int compare(const void *a, const void *b)
{
    Meet meet1 = *(Meet *)a;
    Meet meet2 = *(Meet *)b;

    if (meet1.start < meet2.start)
        return (-1);
    else if (meet1.start > meet2.start)
        return (1);
    else 
    {
        if (meet1.duration < meet2.duration)
            return (-1);
        else if (meet1.duration > meet2.duration)
            return (1);
    }
    return (0);
}
