#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX(a,b) (a > b ? a : b)
#define MIN(a,b) (a < b ? a : b)

typedef struct _NODE 
{
    int id;
    long long value;
    int is_deleted;
} NODE;

int T = 0, k = 0;
NODE *max_heap;
int mxh_idx;
NODE *min_heap;
int mnh_idx;
int *deleted;
int d_i;

int init(void);
int assign(void);
void solve();
void push_max_heap(NODE);
void push_min_heap(NODE);
int is_deleted(NODE *, int);
void max_heapify(NODE *, int, int);
void min_heapify(NODE *, int, int);

int main(void)
{
    if(init())
    {
        for (int i = 0; i < T; ++i)
        {
            scanf("%d", &k);
            if (!k)
                return (0);

            solve();   
        }
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

    max_heap = (NODE *)malloc(sizeof(NODE) * (k+1));
    min_heap = (NODE *)malloc(sizeof(NODE) * (k+1));
    deleted = (int *)malloc(sizeof(int) * (k+1));

    if (!max_heap || !min_heap || !deleted)
        return (0);

    mxh_idx = 0;
    mnh_idx = 0;
    d_i = -1;
    return (1);
}

void solve(void)
{
    assign();
    if (!assign()) 
        return ;

    int is_empty = 0;
    int id = 1;
    for (int j = 0; j < k; ++j)
    {
        char cmd[2];
        long long n;

        scanf("%s", cmd);
        scanf("%lld", &n);

        NODE node;
        node.id = id;
        node.value = n;
        node.is_deleted = 0;

        if (strcmp(cmd, "I") == 0)
        {   
            push_max_heap(node);
            push_min_heap(node);
            ++id;
        }
        else
        {
            if (mxh_idx == 0 || mnh_idx == 0) 
            {
                continue;
            }

            if (n == 1)
            {
                while (mxh_idx >= 1 && is_deleted(min_heap, max_heap[1].id))
                {
                    max_heap[1] = max_heap[mxh_idx];
                    max_heap[mxh_idx].is_deleted = 1;
                    --mxh_idx;
                }

                max_heap[1] = max_heap[mxh_idx];
                max_heap[mxh_idx].is_deleted = 1;
                deleted[++d_i] = max_heap[mxh_idx].id;
                max_heapify(max_heap, 1, mxh_idx);  
                --mxh_idx;  
            }
            else if (n == -1)
            {
                while (mnh_idx >= 0 && is_deleted(max_heap, min_heap[1].id))
                {
                    min_heap[1] = min_heap[mnh_idx];
                    min_heap[mnh_idx].is_deleted = 1;
                    --mnh_idx;
                }

                min_heap[1] = min_heap[mnh_idx];
                min_heap[mnh_idx].is_deleted = 1;
                deleted[++d_i] = min_heap[mnh_idx].id;
                min_heapify(min_heap, 1, mnh_idx);
                --mnh_idx;
            }
        }
    }  

    if (mxh_idx == 0 || mnh_idx == 0) 
    {
        printf("EMPTY\n");
        return ;
    }
    printf("%lld %lld\n", max_heap[1].value, min_heap[1].value);

    if (max_heap)
        free(max_heap);
    if (min_heap)
        free(min_heap);
    if (deleted)
        free(deleted);  
}

void push_max_heap(NODE node)
{
    ++mxh_idx;
    max_heap[mxh_idx] = node;
    int temp_idx = mxh_idx;

    while (temp_idx >= 2)
    {
        NODE parent = max_heap[temp_idx / 2];
        NODE child = max_heap[temp_idx];

        if (child.value > parent.value) 
        {
            max_heap[temp_idx / 2] = child;
            max_heap[temp_idx] = parent;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

void push_min_heap(NODE node)
{
    ++mnh_idx;
    min_heap[mnh_idx] = node;
    int temp_idx = mnh_idx;

    while (temp_idx >= 2)
    {
        NODE parent = min_heap[temp_idx / 2];
        NODE child = min_heap[temp_idx];

        if (child.value < parent.value) 
        {
            min_heap[temp_idx / 2] = child;
            min_heap[temp_idx] = parent;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

int is_deleted(NODE *heap, int id) 
{
  for (int i = 0; i <= d_i; ++i) {
    if (deleted[i] == id)
        return (1);
  }
  return (0);
}

void max_heapify(NODE *heap, int start, int idx)
{   
    int left = start * 2;
    int right = start * 2 + 1;
    int max_idx = start;

    if (left <= idx && MAX(heap[left].value, heap[right].value) == heap[left].value && MAX(heap[left].value, heap[start].value) == heap[left].value)
        max_idx = left;
    if (right <= idx && MAX(heap[left].value, heap[right].value) == heap[right].value && MAX(heap[right].value, heap[start].value) == heap[right].value)
        max_idx = right;


    if (max_idx != start)
    {
        NODE temp = heap[start];
        heap[start] = heap[max_idx];
        heap[max_idx] = temp;
        max_heapify(heap, max_idx, idx);
    }
}


void min_heapify(NODE *heap, int start, int idx)
{   
    int left = start * 2;
    int right = start * 2 + 1;
    int min_idx = start;

    if (left <= idx && MIN(heap[left].value, heap[right].value) == heap[left].value && MIN(heap[left].value, heap[start].value) == heap[left].value)
        min_idx = left;
    if (right <= idx && MIN(heap[left].value, heap[right].value) == heap[right].value && MIN(heap[right].value, heap[start].value) == heap[right].value)
        min_idx = right;

    if (min_idx != start)
    {
        NODE temp = heap[start];
        heap[start] = heap[min_idx];
        heap[min_idx] = temp;
        min_heapify(heap, min_idx, idx);
    }
}