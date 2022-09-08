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
        if (i < T - 1) {
            printf("\n");
        }
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
    int arr_idx = 0;
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
            arr[arr_idx++] = num;
        if (j > i)
            i = j;
        else
            ++i;
    }
    int idx = 0;

    int reversed = 0;
    int left = 0;
    int right = arr_idx;
    while (cmd[idx])
    {
        int j = idx;
        if (cmd[idx] == 'R')
        {
            if (reversed) {
                reversed = 0;
            } else {
                reversed = 1;
            }
        }
        if (cmd[idx] == 'D')
        {
            if (left == right) {
                printf("error");
                return;
            }; 
            if (reversed) {
                --right;
            } else {
                ++left;
            }
        }
        ++idx;
    }

   printf("[");
   if (!reversed) {
    for (int i = left; i < right; ++i) {
        printf("%d", arr[i]);
        if (i < right - 1) {
            printf(",");
        }
    }
   } else {
    // 뒤집어질 때
    for (int i = right - 1; i >= 0; --i) {
        printf("%d", arr[i]);
        if (i >= 1) {
            printf(",");
        }
    }
   }
   printf("]");
   return;
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