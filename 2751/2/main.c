#include <stdio.h>
#define MAX_SIZE 2000001
#define ADDED 1000000

void solve(int N);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int input;
    int nums[MAX_SIZE] = {0, };

    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &input);
        nums[input + ADDED] = 1;
    }
    for (int i = 0; i < MAX_SIZE; ++i)
    {
        if (nums[i])
            printf("%d\n", i - ADDED);
    }
}
