#include <stdio.h>
#include <stdlib.h>

int N = -1;
int M = -1;
int *arr1;
int *arr2;

int init(void);
void solve(void);

int main(void)
{
    while (1) {
        scanf("%d %d", &N, &M);
        if (N == 0 && M == 0)
        {   
            break;
        }
        arr1 = (int *)malloc(sizeof(int) * N);
        for (int i = 0; i < N; ++i) {
            scanf("%d", &arr1[i]);
        }
        arr2 = (int *)malloc(sizeof(int) * M);
        for (int i = 0; i < M; ++i) {
            scanf("%d", &arr2[i]);
        }
        solve();
        free(arr1);
        free(arr2);
    }

    return (0);
}

void solve(void) {
    int i = 0; 
    int j = 0;
    int cnt = 0;
    while (1) {
        if (i == N || j == M) {
            break;
        }

        if (arr1[i] < arr2[j]) {
            ++i;
        } 
        else if (arr1[i] > arr2[j]) {
            ++j;
        }
        else {
            ++i;
            ++j;
            ++cnt;
        }
    }
    printf("%d\n", cnt);
}