#include <stdio.h>
#include <stdlib.h>

// 그리디 알고리즘 / 종료시간 기준으로 정렬 후, 시간이 안겹치는 것들만 선택

typedef struct _Meet
{
    int start;
    int end;
} Meet;
void solve(int N);
int cmp(const void *a, const void *b);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    Meet meets[100000] = {0,};
    for (int i = 0; i < N; ++i)
    {
        scanf("%d %d", &meets[i].start, &meets[i].end);    
    }
    qsort(meets, N, sizeof(Meet), cmp);
    
    int last_end = 0;
    int cnt = 0;
    for (int i = 0; i < N; ++i)
    {
        if (last_end <= meets[i].start)
        {
            last_end = meets[i].end;
            ++cnt;
        } 
    }
    printf("%d", cnt);
}

int cmp(const void *a, const void *b)
{
    Meet meet1 = *(Meet *)a;
    Meet meet2 = *(Meet *)b;

    if (meet1.end < meet2.end)
        return (-1);
    if (meet1.end > meet2.end)
        return (1);
    if (meet1.start < meet2.start)
        return (-1);
    if (meet1.start > meet2.start)
        return (1);
    return (0);
}