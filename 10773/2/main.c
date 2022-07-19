#include <stdio.h>

void solve(int K);

int main(void)
{
    int K;

    scanf("%d", &K);
    solve(K);
    return (0);
}

void solve(int K)
{
    int num, sum = 0;
    int stack[100000] = {0,};
    int idx = -1;
    
    for (int i = 0; i < K; ++i)
    {
        scanf("%d", &num);
        if (num)
        {
            stack[++idx] = num;
            sum += num;
        }
        else
        {
            sum -= stack[idx];
            stack[idx--] = 0;   
        }       
    }
    printf("%d", sum);
}