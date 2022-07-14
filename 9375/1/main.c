#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void solve(int n);

int main(void)
{
    int T;

    scanf("%d", &T);
    for (int i = 0; i < T; ++i)
    {
        int n;
        scanf("%d", &n);
        solve(n);
    }
    return (0);
}

void solve(int n)
{
    int cmb = 1;
    int idx = 0;
    int flag = 0;
    char name[21];
    char *type;
    char* clothArr[30] = {0,};
    int numArr[30] = {0,};

    for (int i = 0; i < n; ++i)
    {
        type = (char*)malloc(sizeof(char) * 21); // 중요

        scanf("%s %s", name, type);
        for (int j = 0; j < idx; ++j)
        {
            if (!strcmp(clothArr[j], type))
            {
                numArr[j]++;
                flag = 1;
                break;
            }
        }
        if (!flag)
        {
            numArr[idx] = 1;
            clothArr[idx++] = type;
        }
        flag = 0;
    }

    for (int k = 0; k < idx; k++) {
        cmb *= (numArr[k] + 1);
    }  
    printf("%d\n", cmb - 1);
}  