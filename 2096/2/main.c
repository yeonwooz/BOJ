#include <stdio.h>
#include <stdlib.h>
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define MAX(a, b) (((a) > (b)) ? (a) : (b))

int N = -1;
int **maxDp;
int **minDp;

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
    scanf("%d", &N);
    if (N >= 0) {
        maxDp = (int **)malloc(sizeof(int *) * N);
        minDp = (int **)malloc(sizeof(int *) * N);
        if (!maxDp || !minDp) return (0);

        for (int i = 0; i < N; ++i) {
            maxDp[i] = (int *)malloc(sizeof(int) * N);
            minDp[i] = (int *)malloc(sizeof(int) * N);
            
            if (!maxDp[i] || !minDp[i]) return (0);

            for (int j = 0; j < 3; ++j) {
                scanf("%d", &maxDp[i][j]);
                minDp[i][j] = maxDp[i][j];
            }
        }
        return (1);
    }
    return (0);
}

void solve(void) 
{
    for (int i = 0; i < N; ++i) {
        if (i == 0) continue;

        maxDp[i][0] += MAX(maxDp[i-1][0], maxDp[i-1][1]);
        maxDp[i][2] += MAX(maxDp[i-1][1], maxDp[i-1][2]);
        int tempMax = MAX(maxDp[i-1][0], maxDp[i-1][1]);
        maxDp[i][1] += MAX(tempMax, maxDp[i-1][2]);

        minDp[i][0] += MIN(minDp[i-1][0], minDp[i-1][1]);
        minDp[i][2] += MIN(minDp[i-1][1], minDp[i-1][2]);
        int tempMin = MIN(minDp[i-1][0], minDp[i-1][1]);
        minDp[i][1] += MIN(tempMin, minDp[i-1][2]);
    }

    int maxScore = MAX(maxDp[N-1][0], maxDp[N-1][1]);
    maxScore = MAX(maxScore, maxDp[N-1][2]);
    
    int minScore = MIN(minDp[N-1][0], minDp[N-1][1]);
    minScore = MIN(minScore, minDp[N-1][2]);

    printf("%d %d", maxScore, minScore);
}