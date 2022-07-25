#include <stdio.h>
#include <stdlib.h>

typedef struct _DP
{
    int num;
    int cnt;
} DP;

void solve(int);
void quick_sort(DP*, int, int);
int binsearch(DP*, int, int);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int *dots;
    DP *dp;
    
    dots = (int *)malloc(sizeof(int) * N);
    dp = (DP *)malloc(sizeof(DP) * N);
    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &dots[i]);
        dp[i].num = dots[i];
    }
    
    quick_sort(dp, 0, N - 1);

    dp[0].cnt = 0;
    for (int i = 1; i < N; ++i)
    {
        if (dp[i].num == dp[i-1].num)
            dp[i].cnt = dp[i-1].cnt;
        else
            dp[i].cnt = dp[i-1].cnt + 1;
    }

    for (int i = 0; i < N; ++i)
    {
        printf("%d", binsearch(dp, N, dots[i]));
        if (i < N - 1)
            printf(" ");
    }
}

void quick_sort(DP *dp, int start, int end)
{
    int left = start;
    int right = end;
    int pivot = (start + end) / 2;

    while (left <= right)
    {
        while (dp[left].num < dp[pivot].num) ++left;
        while (dp[right].num > dp[pivot].num) --right;

        if (left <= right)
        {
            DP temp = dp[right];
            dp[right]= dp[left];
            dp[left] = temp;
            ++left;
            --right;
        }
    }
    if (start < right) quick_sort(dp, start, right);
    if (end > left) quick_sort(dp, left, end);
}

int binsearch(DP* dp, int len, int target)
{
    int start = 0;
    int end = len - 1;
    int answer;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (dp[mid].num == target)
        {
            answer = dp[mid].cnt;
            break;
        }
        if (dp[mid].num > target)
            end = mid - 1;
        else 
            start = mid + 1;
    }
    return answer;
}