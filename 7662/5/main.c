#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX(a,b) (a > b ? a : b)
#define MIN(a,b) (a < b ? a : b)

int T = 0, k = 0;
long long int *max_heap;
long long int *min_heap;

int maxHead;
int maxTail;
int minHead;
int minTail;

int init(void);
int assign(void);
void solve();
void push_max_heap(long long);
void push_min_heap(long long);
void max_heapify(long long int *, int, int);
void min_heapify(long long int *, int, int);
int isInHeap(long long*, long long int);

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
    
    if (!max_heap || !min_heap)
        return (0);

    max_heap[0] = 0;
    min_heap[0] = 0;
    maxHead = 1;
    maxTail = 1;
    minHead = 1;
    minTail = 1;
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
        }
        else 
        {
            if (num == 1)
            {
                while (maxHead < maxTail && !isInHeap(min_heap, max_heap[maxHead]))
                {
                    ++maxHead;
                }
                if (maxHead == maxTail) continue;
                max_heap[maxHead] = max_heap[maxTail - 1];
                --maxTail;
                max_heapify(max_heap, maxHead, maxTail);  
            }
            else 
            {
                while (minHead < minTail && !isInHeap(max_heap, min_heap[minHead]))
                {
                    ++minHead;
                }
                if (minHead == minTail) continue;
                min_heap[minHead] = min_heap[minTail - 1];
                --minTail;
                min_heapify(min_heap, minHead, minTail);
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

void push_max_heap(long long num)
{
    ++maxTail;
    max_heap[maxTail] = num;
    int temp_idx = maxTail;

    while (temp_idx >= 2)
    {
        long long parent = max_heap[temp_idx / 2];
        long long child = max_heap[temp_idx];

        if (child > parent) 
        {
            max_heap[temp_idx / 2] = child;
            max_heap[temp_idx] = parent;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

void push_min_heap(long long num)
{
    ++minTail;
    min_heap[minTail] = num;
    int temp_idx = minTail;

    while (temp_idx >= 2)
    {
        long long parent = min_heap[temp_idx / 2];
        long long child = min_heap[temp_idx];

        if (child < parent) 
        {
            min_heap[temp_idx / 2] = child;
            min_heap[temp_idx] = parent;
            temp_idx /= 2;
            continue;
        }
        break;
    }
}

void max_heapify(long long *heap, int start, int idx)
{   
    int left = start * 2;
    int right = start * 2 + 1;
    int max_idx = start;

    if (left <= idx && MAX(heap[left], heap[right]) == heap[left] && MAX(heap[left], heap[start]) == heap[left])
        max_idx = left;
    if (right <= idx && MAX(heap[left], heap[right]) == heap[right] && MAX(heap[right], heap[start]) == heap[right])
        max_idx = right;


    if (max_idx != start)
    {
        long long temp = heap[start];
        heap[start] = heap[max_idx];
        heap[max_idx] = temp;
        max_heapify(heap, max_idx, idx);
    }
}


void min_heapify(long long *heap, int start, int idx)
{   
    int left = start * 2;
    int right = start * 2 + 1;
    int min_idx = start;

    if (left <= idx && MIN(heap[left], heap[right]) == heap[left] && MIN(heap[left], heap[start]) == heap[left])
        min_idx = left;
    if (right <= idx && MIN(heap[left], heap[right]) == heap[right] && MIN(heap[right], heap[start]) == heap[right])
        min_idx = right;

    if (min_idx != start)
    {
        long long temp = heap[start];
        heap[start] = heap[min_idx];
        heap[min_idx] = temp;
        min_heapify(heap, min_idx, idx);
    }
}


int isInHeap(long long* heap, long long int num) 
{
    int i = 0;
    while (heap[i]) {
        if (heap[i] == num ) {
            return 1;
        }
        ++i;
    }
    return 0;
}