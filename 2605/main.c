#include <stdio.h>
#include <stdlib.h>

struct NODE {
    struct NODE *next;
    int data;
};

int n = -1;
int num;
int arr[100] = {0,};

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
    scanf("%d", &n);
    if (n == -1)
        return (0);
    return (1);
}

void solve()
{
    for (int i = 0; i < n; ++i)
    {
        arr[i] = i + 1;
        scanf("%d", &num);

        for (int j = i; j > i - num; --j)
        {
            int temp;
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }  

    for (int i = 0; i < n; ++i)
    {
        printf("%d ", arr[i]);
    } 
}