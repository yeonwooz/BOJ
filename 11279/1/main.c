#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) (a > b ? a : b)

void solve(int N);
void heapify(int *heap, int start, int idx);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int heap[100001] = {0, };
    int idx = 0;

    for (int i = 1; i <= N; ++i)
    {
        int x;

        scanf("%d", &x);
        // printf("====%d====\n", x);
        if (x == 0)
        {
            // pop
            if (idx == 0)
            {
                printf("0\n");
            }
            else 
            {
                printf("%d\n", heap[1]);
                // 마지막 값과 교체 후 heapify
                heap[1] = heap[idx];
                heap[idx] = 0;
                heapify(heap, 1, idx);
                --idx;
            }
        }    
        else
        {
            // push
            heap[++idx] = x;
            int temp_idx = idx;
            
            while (temp_idx >= 2)
            {
                int parent = heap[temp_idx / 2];
                int child = heap[temp_idx];

                if (child > parent)
                {
                    heap[temp_idx / 2] = child;
                    heap[temp_idx] = parent;
                    temp_idx /= 2;
                    continue;
                }

                break;;
            }
      
        }

        // //====
        // for (int i = 1; i <= N; ++i)
        // {
        //     printf("%d ", heap[i]);
        // }
        // printf("\n");
        // //====
    }
}

void heapify(int *heap, int start, int idx)
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
        int temp = heap[start];
        heap[start] = heap[max_idx];
        heap[max_idx] = temp;
        heapify(heap, max_idx, idx);
    }
}