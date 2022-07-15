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
    if (top <= 0)
        return ;
    // 루트부터 아래까지 정렬
    int i = 0;
    int left = i * 2 + 1;
    int right = i * 2 + 2;

    while (i <= top)
    {
        if (i == top)
            break;
        int min_child_idx;
        if (left < right)
            min_child_idx = left;
        else
            min_child_idx = right;

        if(heap[min_child_idx] < heap[i])
        {
            int temp = heap[i];
            heap[i] = heap[min_child_idx];
            heap[min_child_idx] = temp;
        }
        ++i;
    }
}