#include <stdio.h>
#include <stdlib.h>
#define MIN(a,b) (a < b ? a : b)

void solve(int N);
int get_min(int a, int b);
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
    int heap[100001] = {0,}; // 절댓값 최소힙 (0번째 인덱스가 최소절대값, 같은 절댓값이 여러개면 최소값)
    int idx = 0;

    for (int i = 0; i < N; ++i)
    {
        int x;
        scanf("%d", &x);

        if (x == 0) // trying to pop
        {
            if (idx == 0) // empty
            {
                printf("0\n");
            }
            else // pop
            {
                printf("%d\n", heap[1]);
                heap[1] = heap[idx];
                heapify(heap, 1, idx);
                heap[idx] = 0;
                idx--;
            }
        }
        else // push
        {
            heap[++idx] = x;
            int temp_idx = idx;

            while (temp_idx >= 2)
            {
                int parent = heap[temp_idx / 2];
                int child = heap[temp_idx];
                if (get_min(parent, child) == child)
                {
                    heap[temp_idx / 2] = child;
                    heap[temp_idx] = parent;
                    temp_idx /= 2;
                    continue;
                }
                break;
            }
        }
    }
}

int get_min(int a, int b)
{
    if (abs(a) < abs(b))
        return (a);
    if (abs(a) > abs(b))
        return (b);
    return MIN(a, b);
}

void heapify(int *heap, int start, int idx)
{
    int left = start * 2;
    int right = start * 2 + 1;
    int min_idx = start;

    if (left <= idx && get_min(heap[left], heap[min_idx]) == heap[left])
        min_idx = left;
    if (right <= idx && get_min(heap[right], heap[min_idx]) == heap[right])
        min_idx = right;

    if (min_idx != start)
    {
        int temp = heap[start];
        heap[start] = heap[min_idx];
        heap[min_idx] = temp;
        heapify(heap, min_idx, idx);
    }
}