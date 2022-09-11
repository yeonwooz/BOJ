#include <stdio.h>
#include <stdlib.h>
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define MAX(a, b) (((a) > (b)) ? (a) : (b))

int N = -1;
int maxDp[2][3];
int minDp[2][3];
int nums[3] = {0,};

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
        return (1);
    }
    return (0);
}

void solve(void) 
{
    int row = 0;
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < 3; ++j) {
            scanf("%d", &nums[j]);
        }

        maxDp[row][0] = MAX(maxDp[1-row][0], maxDp[1-row][1]) + nums[0];
        maxDp[row][1] = MAX(
            MAX(maxDp[1-row][0], maxDp[1-row][1]), maxDp[1-row][2]
        ) + nums[1];
        maxDp[row][2] = MAX(maxDp[1-row][1], maxDp[1-row][2]) + nums[2];

        minDp[row][0] = MIN(minDp[1-row][0], minDp[1-row][1]) + nums[0];
        minDp[row][1] = MIN(
            MIN(minDp[1-row][0], minDp[1-row][1]), minDp[1-row][2]
        ) + nums[1];
        minDp[row][2] = MIN(minDp[1-row][1], minDp[1-row][2]) + nums[2];

        row = 1 - row;
    }

    int maxScore = MAX(MAX(maxDp[1-row][0], maxDp[1-row][1]), maxDp[1-row][2]);
    int minScore = MIN(MIN(minDp[1-row][0], minDp[1-row][1]), minDp[1-row][2]);

    printf("%d %d", maxScore, minScore);
}