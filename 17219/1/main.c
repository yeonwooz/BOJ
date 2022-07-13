#include <stdio.h>
#include <string.h>

typedef struct _dict
{
    char url[21];
    char pw[21];
} Dict;

void solve(int N, int M);
int cmp(const void *a, const void *b);
char *binsearch(Dict *dict, int len, char *target);

int main(void)
{
    int N, M;

    scanf("%d %d", &N, &M);
    solve(N, M);
    return (0);
}

void solve(int N, int M)
{
    Dict dicts[100000] = {0,};

    for (int i = 0; i < N; ++i)
    {
        char url[21] = {0,};
        char pw[21] = {0,};
        scanf("%s %s", url, pw);
 
        strncpy(dicts[i].url, url, strlen(url));
        strncpy(dicts[i].pw, pw, strlen(pw));
    }
    qsort(dicts, N, sizeof(Dict), cmp);
    for (int i = 0; i < M; ++i)
    {
        char url[21] = {0,};
        scanf("%s", url);
        printf("%s", binsearch(dicts, N, url));
        if (i < M - 1)
            printf("\n"); 
    }
}

int cmp(const void *a, const void *b)
{
    Dict dict1 = *(Dict *)a;
    Dict dict2 = *(Dict *)b;
    return (strcmp(dict1.url, dict2.url));
}

char *binsearch(Dict *dicts, int len, char *target)
{
    int start = 0;
    int end = len - 1;
    while (start <= end)
    {
        int mid = (start + end) / 2;
        if (!strcmp(dicts[mid].url, target))
            return dicts[mid].pw;
        if (strcmp(dicts[mid].url, target) < 0) 
            start = mid + 1;    
        if (strcmp(dicts[mid].url, target) > 0)
            end = mid - 1;
    }
    return ("");
}