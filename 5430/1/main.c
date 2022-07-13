#include <stdio.h>

void solve();
int main(void)
{
    int T;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
        solve();
    return (0);
}

void solve()
{
    char cmd[100001] = {0,};
    int n;
    char str_arr[200001] = {0,};;
    int arr[100000] = {0,}; 
    
    scanf("%s\n%d\n%s", cmd, &n, str_arr);
    int arr_idx = -1;
    int i = 1;
    while (str_arr[i] != ']')
    {
        int num = 0;
        int j = i;
        while (str_arr[j] != ',' && str_arr[j] != ']')
        {
            num = num * 10 + (str_arr[j] - '0');
            ++j;
        }
        if (num)
            arr[++arr_idx] = num;
        if (j > i)
            i = j;
        else
            ++i;
    }
    printf("%d %d %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3],  arr[4],  arr[5]);
}

void R(int *arr, int len)
{
    for (int i = 0; i < len; ++i)
    {
        int temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
}

int D(int *arr, int len, int head)
{
    if (len == 0)
    {
        printf("error\n");
        return (-1);
    }
    arr[head++] = 0;
    return head;
}