#include <stdio.h>
#include <stdlib.h>

int *recur(int N, int start_i, int start_j, int **arr, int *answer);
int is_pure(int N, int start_i, int start_j, int **arr);

int main(void)
{
    int N;
    int **paper;
    scanf("%d", &N);
    paper = (int **)malloc(sizeof(int *) * N);
    for (int i = 0; i < N; ++i)
    {
        paper[i] = (int *)malloc(sizeof(int) * N);
        for (int j = 0; j < N; ++j)
        {
            scanf("%d", &paper[i][j]);
        }
    }
    int *answer;
    answer = (int *)malloc(sizeof(int) * 3);
    answer[0] = 0;
    answer[1] = 0;
    answer[2] = 0;
    answer = recur(N, 0, 0, paper, answer);
    printf("%d\n%d\n%d", answer[0], answer[1], answer[2]);
    return (0);
}

int *recur(int N, int start_i, int start_j, int **arr, int *answer)
{
    if (is_pure(N, start_i, start_j, arr))
    {
        answer[arr[start_i][start_j] + 1]++;
        return answer;
    }
    for (int i = start_i; i < start_i + N; i += N / 3)
    {
        for (int j = start_j; j < start_j + N; j += N / 3)
        {
            answer = recur(N / 3, i, j, arr, answer);
        }
    }
    return answer;
}

int is_pure(int N, int start_i, int start_j, int **arr)
{
    int num = arr[start_i][start_j];
    for (int i = start_i; i < start_i + N; ++i)
    {
        for (int j = start_j; j < start_j + N; ++j)
        {
            if (arr[i][j] != num)
                return (0);
        }
    }
    return (1);
}