#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int is_in(int *arr, int len, int num);

int main(void)
{
    // 숫자 중 일부만 고장남, + - 는 정상
    const int start = 100;
    char N[500001] = {0,};
    int M, min_touch = 0;
    int *brokens;
    scanf("%s", N);
    scanf("%d", &M);
    brokens = (int *)malloc(sizeof(int) * M);
    for (int i = 0; i < M; ++i)
    {
        scanf("%d", &brokens[i]);
    }
    min_touch = N - start;
    int nLen = strlen(N);
    int now;
    if (!is_in(brokens, M, N[0] - '0'))
    {
          // 
    }
    else 
    {

    }



    if (N < 100)
    {



    }
    else if (N > 100)
    {

    }
    else 
    {
        min_touch = 0;
    }
    printf("%d", min_touch);
    return (0);
}

int is_in(int *arr, int len, int num)
{
    for (int i = 0; i < len; ++i)
    {
        if (arr[i] == num)
            return (1);
    }
    return (0);
}