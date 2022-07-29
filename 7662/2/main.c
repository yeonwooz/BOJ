#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 1000000

typedef struct _NODE 
{
    int value;
    int is_deleted;
} NODE;

int T = 0, k = 0;
NODE *max_heap;
int mxh_idx = 0;
NODE *min_heap;
int mnh_idx = 0;

int init(void);
int assign(void);
void solve(char *);
void push_max_heap(NODE);
void push_min_heap(NODE);

int main(void)
{
    if(init())
    {
        for (int i = 0; i < T; ++i)
        {
            scanf("%d", &k);

            if (!k || !assign())
                return (0);

            for (int j = 0; j < k; ++j)
            {
                char cmd[2];

                scanf("%s", cmd);
                solve(cmd);
            }       
        }
        if (max_heap)
            free(max_heap);
        if (min_heap)
            free(min_heap);
    }
    return (0);
}

int init(void)
{
    scanf("%d", &T);
    if (T)
        return (1);
    return (0);
}

int assign(void)
{
    max_heap = (NODE *)malloc(sizeof(NODE) * k);
    min_heap = (NODE *)malloc(sizeof(NODE) * k);
    if (!max_heap || !min_heap)
        return (0);
    return (1);
}

void solve(char *cmd)
{
    int n;
    scanf("%d", &n);
    
    NODE node;
    node.value = n;
    node.is_deleted = 0;

    if (strcmp(cmd, "I") == 0)
    {   
        push_max_heap(node);
        push_min_heap(node);
    }
    else
    {

    }

}

void push_max_heap(NODE node)
{
    max_heap[mxh_idx++] = node;
}

void push_min_heap(NODE node)
{
    min_heap[mnh_idx++] = node;
}