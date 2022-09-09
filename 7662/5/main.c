#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
#define MAX(a,b) (a > b ? a : b)
#define MIN(a,b) (a < b ? a : b)

typedef struct _DELETED_NODE 
{
    long long value;
    int cnt;
} DELETED_NODE;

int T = 0, k = 0;
long long int *max_heap;
long long int *min_heap;
DELETED_NODE *deleted;
int deltedNodeIdx;

int maxHead;
int maxTail;
int minHead;
int minTail;

int init(void);
int assign(void);
void solve();
void push_max_heap(long long);
void push_min_heap(long long);
void max_heapify(int, int);
void min_heapify(int, int);
int in_deleted(long long int num);

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
    max_heap = (long long int *)malloc(sizeof(long long int) * (k+1));
    min_heap = (long long int *)malloc(sizeof(long long int) * (k+1));
    deleted = (DELETED_NODE *)malloc(sizeof(DELETED_NODE) * (k));

    if (!max_heap || !min_heap || !deleted)
        return (0);

    max_heap[0] = 0;
    min_heap[0] = 0;
    maxHead = 1;
    maxTail = 1;
    minHead = 1;
    minTail = 1;
    deltedNodeIdx = -1;
    return (1);
}

void solve(void)
{
    assign();
    if (!assign()) 
        return ;

    for (int j = 0; j < k; ++j)
    {
        char cmd[2];
        long long num;

        scanf("%s", cmd);
        scanf("%lld", &num);
        if (strcmp(cmd, "I") == 0)
        {  
            push_max_heap(num);
            push_min_heap(num);

            if (deltedNodeIdx >= 0) {
                int i = 0;
                while (i <= deltedNodeIdx) {
                    if (deleted[i].value == num) {
                        if (deleted[i].cnt == 1) {
                            deleted[i].value = INT_MAX + 1;
                            deleted[i].cnt = 0;
                        } else if (deleted[i].cnt > 1) {
                            deleted[i].cnt --;
                        }
                    }
                    ++i;
                }
            }
        }
        else 
        {
            if (num == 1)
            {
                while (maxHead < maxTail && in_deleted(max_heap[maxHead]))
                {
                    ++maxHead;
                }
                if (maxHead == maxTail) continue;

                ++deltedNodeIdx;
                deleted[deltedNodeIdx].value = max_heap[maxHead];
                deleted[deltedNodeIdx].cnt = 1;

                max_heap[maxHead] = max_heap[maxTail - 1];
                --maxTail;
                max_heapify(maxHead, maxTail);  
            }
            else 
            {
                while (minHead < minTail && in_deleted(min_heap[minHead]))
                {
                    ++minHead;
                }
                if (minHead == minTail) continue;

                ++deltedNodeIdx;
                deleted[deltedNodeIdx].value = min_heap[minHead];
                deleted[deltedNodeIdx].cnt = 1;
                
                min_heap[minHead] = min_heap[minTail - 1];
                --minTail;
                min_heapify(minHead, minTail);
            }

        }
    }

    if (minHead == minTail || maxHead == maxTail) 
    {
        printf("EMPTY\n");
        return ;
    }

    printf("%lld %lld\n", max_heap[maxHead], min_heap[minHead]);

    if (max_heap)
        free(max_heap);
    if (min_heap)
        free(min_heap);
}


void push_min_heap(long long num)
{
    min_heap[minTail++] = num;
    int temp_idx = minTail - 1;

    while (temp_idx >= 2)
    {
        long long parent = temp_idx / 2;
        long long child = temp_idx;

        if (min_heap[parent] > min_heap[child]) 
        {
            int temp = min_heap[parent];
            min_heap[parent] = min_heap[child];
            min_heap[child] = temp;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

void push_max_heap(long long num)
{
    max_heap[maxTail++] = num;
    int temp_idx = maxTail - 1;

    while (temp_idx >= 2)
    {
        long long parent = temp_idx / 2;
        long long child = temp_idx;

        if (max_heap[parent] < max_heap[child]) 
        {
            int temp = max_heap[parent];
            max_heap[parent] = max_heap[child];
            max_heap[child] = temp;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

void min_heapify(int start, int idx)
{   
    int min_idx = start;
    int left = start * 2;
    int right = start * 2 + 1;

    if (left <= idx && MIN(min_heap[left], min_heap[right]) == min_heap[left] && MIN(min_heap[left], min_heap[start]) == min_heap[left])
    {
        min_idx = left;
    }
    if (right <= idx && MIN(min_heap[left], min_heap[right]) == min_heap[right] && MIN(min_heap[right], min_heap[start]) == min_heap[right])
    {
        min_idx = right;
    }

    if (min_idx != start)
    {
        long long temp = min_heap[start];
        min_heap[start] = min_heap[min_idx];
        min_heap[min_idx] = temp;
        min_heapify(min_idx, idx);
    }
}

void max_heapify(int start, int idx)
{   
    int max_idx = start;
    int left = start * 2;
    int right = start * 2 + 1;

    if (left <= idx && MAX(max_heap[left], max_heap[right]) == max_heap[left] && MAX(max_heap[left], max_heap[start]) == max_heap[left])
    {
        max_idx = left;
    }
    if (right <= idx && MAX(max_heap[left], max_heap[right]) == max_heap[right] && MAX(max_heap[right], max_heap[start]) == max_heap[right])
    {
        max_idx = right;
    }

    if (max_idx != start)
    {
        long long temp = max_heap[start];
        max_heap[start] = max_heap[max_idx];
        max_heap[max_idx] = temp;
        max_heapify(max_idx, idx);
    }
}

int in_deleted(long long int num) 
{
    int i = 0;
    while (i <= deltedNodeIdx) {
        if (deleted[i].value == num) {
            return deleted[i].cnt;
        }
        ++i;
    }
    return 0;
}

