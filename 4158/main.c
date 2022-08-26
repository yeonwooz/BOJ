#include <stdio.h>

int N = 0;
int M = 0;
int cnt = 0;
int arr1[1000000] = {0,};
int arr2[1000000] = {0,};

int init(void);
void solve(void);

int main(void)
{
    if(init())
    {
        solve();
    }
    return (0);
}

int init(void)
{
    scanf("%d %d", &N, &M);
    for (int i = 0; i < N; ++i) {
        scanf("%d", &arr1[i]);
    }
    for (int i = 0; i < M; ++i) {
        scanf("%d", &arr2[i]);
    }
    return (1);
}

void solve(void) {
    int i = 0; 
    int j = 0;

    while (arr1[i] && arr2[j]) {
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
    printf("%d", cnt);
}