#include <stdio.h>
#include <stdlib.h>

void solve(int N);
void sort_heap(int *heap, int top);

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
    int top = -1;

    heap = (int *)malloc(sizeof(int) * N);
    for (int i = 0; i < N; ++i)
    {
        heap[i] = 0;
    }

    for (int i = 0; i < N; ++i)
    {
        scanf("%d", &input);
        
        if (input == 0) // pop min element
        {
            if (top == -1)  // when isEmpty
            {
                printf("0\n");
            }
            else    // when there are elements
            {
                printf("%d\n", heap[0]);
                // printf(">>heap[%d]=%d<<\n", top, heap[top]);
                if (top == -1)
                    continue;
                heap[0] = heap[top];
                heap[top--] = 0;
                sort_heap(heap, top);
            }
        }
        else // push new element
        {
            heap[++top] = input;
            int position = top;
            sort_heap(heap, top);
        }

        // for (int j = 0; j < N; ++j)
        // {
        //     printf("%d ", heap[j]);
        // }
        // printf("\n");
    }   
}

void sort_heap(int *heap, int top)
{
    while (1)
    {
        int position = top;

        if (position == 0)
            break;
        if (position % 2 == 0) // even node
        {
            int parent = heap[(position - 2) / 2];
            int child = heap[position];
            if (heap[(position - 2) / 2] > heap[position])
            {
                heap[(position - 2) / 2] = child;
                heap[position] = parent;
                position = (position - 2) / 2;
            }
            else
                break; 
        }
        else // odd node
        {
            int parent = heap[(position - 1) / 2];
            int child = heap[position];
            if (heap[(position - 1) / 2] > heap[position])
            {
                heap[(position - 1) / 2] = child;
                heap[position] = parent;
                position = (position - 1) / 2;
            }
            else
                break;
        }
    }
}