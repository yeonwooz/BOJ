#include <stdio.h>

int get_cnt(char arr[51][51], int last_col, int last_row);

int main(void)
{
    int N, M, swap_cnt;
    char arr[51][51] = {0, };
    int min = 64;

    scanf("%d %d", &N, &M);
    for (int i = 0; i < N; ++i)
    {
        scanf("%s", arr[i]);
    }

    for (int i = N - 1; i < N; ++i)
    {
        for (int j = M - 1; j < M; ++j)
        {
            swap_cnt = get_cnt(arr, N - 1, M - 1);
            if (swap_cnt < min)
                min = swap_cnt;
        }
    }
    printf("%d", swap_cnt);
    return (0);
}

int get_cnt(char arr[51][51], int last_col, int last_row)
{
    int swap_cnt_1 = 0, swap_cnt_2 = 0;

    for (int i = last_col - 7; i <= last_col; ++i)
    {
        for (int j = last_row - 7; j <= last_row; ++j)
        {
            if ((i % 2 == j % 2 && arr[i][j] == 'B') || (i % 2 != j % 2 && arr[i][j] == 'W'))
                ++swap_cnt_1;
            else if ((i % 2 == j % 2 && arr[i][j] == 'W') || (i % 2 != j % 2 && arr[i][j] == 'B'))
                ++swap_cnt_2;
        }
    }
    if (swap_cnt_1 < swap_cnt_2)
        return (swap_cnt_1);
    else
        return (swap_cnt_2);
}