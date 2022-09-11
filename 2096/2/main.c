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
    int curRow = 1;
    int prevRow = 0;
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < 3; ++j) {
            scanf("%d", &nums[j]);
        }

        if (i == 0) {
            for (int j = 0; j < 3; ++j) {
                maxDp[i][j] = nums[j];
                minDp[i][j] = nums[j];
            }
            continue;
        };
        if (i % 2 == 1) {
            curRow = 1;
            prevRow = 0;
        } else {
            curRow = 0;
            prevRow = 1;
        }

        maxDp[curRow][0] = MAX(maxDp[prevRow][0], maxDp[prevRow][1]) + nums[0];
        maxDp[curRow][2] = MAX(maxDp[prevRow][1], maxDp[prevRow][2]) + nums[2];
        int tempMax = MAX(maxDp[prevRow][0], maxDp[prevRow][1]);
        maxDp[curRow][1] = MAX(tempMax, maxDp[prevRow][2]) + nums[1];

        minDp[curRow][0] = MIN(minDp[prevRow][0], minDp[prevRow][1]) + nums[0];
        minDp[curRow][2] = MIN(minDp[prevRow][1], minDp[prevRow][2]) + nums[2];
        int tempMin = MIN(minDp[prevRow][0], minDp[prevRow][1]);
        minDp[curRow][1] = MIN(tempMin, minDp[prevRow][2]) + nums[1];
    }

    int maxScore = MAX(maxDp[curRow][0], maxDp[curRow][1]);
    maxScore = MAX(maxScore, maxDp[curRow][2]);
    
    int minScore = MIN(minDp[curRow][0], minDp[curRow][1]);
    minScore = MIN(minScore, minDp[curRow][2]);

    printf("%d %d", maxScore, minScore);
}