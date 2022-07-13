#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct _Item
{
    char type[21];
    char name[21];
} Item;

void solve(int n);
// int lower_bound(Item *items, int len, char *type);
int cmp(const void *a, const void *b);

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
    Item items[30] = {0,};

    for (int i = 0; i < n; ++i)
    {
        char name[21];
        char type[21];
        scanf("%s %s", name, type);
        strncpy(items[i].type, type, strlen(type) + 1);
        strncpy(items[i].name, name, strlen(name) + 1);
    }
    qsort(items, n, sizeof(Item), cmp);

    int name_cnt = 1;
    int cmb = 1;
    char cur_type[21] = {0,};
    strncpy(cur_type, items[0].type, strlen(items[0].type) + 1);
    for (int i = 1; i < n; ++i)
    {
        if (strcmp(cur_type, items[i].type) != 0)
        {
            cmb *= (name_cnt + 1);
            name_cnt = 1;
            strncpy(cur_type, items[i].type, strlen(items[i].type) + 1);
        }
        else 
        {
            ++name_cnt;
            if (i == n - 1)
                cmb *= (name_cnt + 1);
        }
    }
    printf("%d\n", cmb - 1);
}  

int cmp(const void *a, const void *b)
{
    Item item1 = *(Item *)a;
    Item item2 = *(Item *)b;
    return strcmp(item1.type, item2.type);
}