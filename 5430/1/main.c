#include <stdio.h>
#include <string.h>

void R(int *arr, int len);
void solve();

int main(void)
{
    int T;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        solve();
    }
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
    int head = 0;
    int idx = 0;
    int r_cnt = 0;

    while (cmd[idx])
    {
        int j = idx;
        while (cmd[idx] == 'R')
        {
            ++r_cnt;   
            ++j;
            ++idx;
        }
        if (cmd[idx] == 'D')
        {
            if (r_cnt % 2 > 0)
            {
                R(arr, n);
                r_cnt = 0;
            }
            if (n == 0 || head == n-1)
            {
                printf("error\n");
                return ;
            }
            ++head;
            ++idx;  
        }
  
    }

    printf("[");
    for (int i = head; i < n; ++i)
    {
        if (arr[i])
        {
            printf("%d", arr[i]);
            if (i < n-1)
                printf(", ");
        }
    }
    printf("]\n");    
}

void R(int *arr, int len)
{
    for (int i = 0; i < len / 2; ++i)
    {
        int temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
}