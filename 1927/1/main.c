#include <stdio.h>
#include <stdlib.h>

void solve(int N);
void heapfify(int *heap, int idx, int i);

int main(void)
{
    int N;

    scanf("%d", &N);
    solve(N);
    return (0);
}

void solve(int N)
{
    int input;
    int *heap;
    int idx = 1;

    heap = (int *)malloc(sizeof(int) * (N + 1));
    for (int i = 0; i <= N; ++i)
    {
        heap[i] = 0;
    }

    for (int i = 1; i <= N; ++i)
    {
        scanf("%d", &input);
        
        if (input == 0) // pop min element
        {
            if (idx == 1)  // when isEmpty
                printf("0\n");
            else    // when there are elements
            {
                printf("%d\n", heap[1]);
                heap[1] = heap[idx - 1];
                heapfify(heap, idx, 1);
                idx--;
            }
        }
        else // push new element
        {
            int temp_idx = idx;
            heap[idx++] = input;
            while (temp_idx > 1)
            {
                int parent = heap[temp_idx / 2];
                int child = heap[temp_idx];
                if (parent > child)
                {
                    heap[temp_idx / 2] = child;
                    heap[temp_idx] = parent;
                    temp_idx /= 2;
                    continue;
                }
                break;
            }
        }

        // for (int j = 0; j < N; ++j)
        // {
        //     printf("%d ", heap[j]);
        // }
        // printf("\n");
    }   
}

void heapfify(int *heap, int idx, int i)
{
    // i번째 노드부터 아래까지 정렬
    int left = i * 2;
    int right = i * 2 + 1;
    int min = i;

    if (left < idx && heap[left] < heap[min])
        min = left;
    if (right < idx && heap[right] < heap[min])
        min = right;
    if (min != i)
    {
        int temp = heap[i];
        heap[i] = heap[min];
        heap[min] = temp;
        heapfify(heap, idx, min);
    }
}