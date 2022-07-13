#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmp(const void *a, const void *b);
int binsearch(char **arr, int len, char * target);

int main(void)
{
    int N, M;
    char **arr1;
    char **arr2;

    scanf("%d %d", &N, &M);
    arr1 = (char **)malloc(sizeof(char *) * N);
    arr2 = (char **)malloc(sizeof(char *) * M);

    for (int i = 0; i < N; ++i)
    {
        arr1[i] = (char *)malloc(sizeof(char) * 21);
        scanf("%s", arr1[i]);
    }
    qsort(arr1, N, sizeof(char *), cmp);
    
    int found_idx, cur_idx = 0;
    for (int i = 0; i < M; ++i)
    {
        arr2[i] = (char *)malloc(sizeof(char) * 21);
        char name[21] = {0,};
        
        scanf("%s", name);
        found_idx = binsearch(arr1, N, name);
        if (found_idx >= 0)
        {
            strncpy(arr2[i], name, strlen(name) + 1);
            ++cur_idx;
        }
        else 
            arr2[i] = "\0";
    }
    qsort(arr2, M, sizeof(char *), cmp);
    
    printf("%d", cur_idx);
    for (int i = 0; i < M; ++i)
    {
        if (strlen(arr2[i]))
            printf("\n%s", arr2[i]);
    }
    return (0);
}

int cmp(const void *a, const void *b)
{
    char *name1 = *(char **)a;
    char *name2 = *(char **)b;
    return (strcmp(name1, name2));
}

int binsearch(char **arr, int len, char *target)
{
    int start = 0;
    int end = len - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;

        if (!strcmp(arr[mid], target))
            return (mid);
        if (strcmp(arr[mid], target) > 0)
            end = mid - 1;
        if (strcmp(arr[mid], target) < 0)
            start = mid + 1;            
    }
    return (-1);
}