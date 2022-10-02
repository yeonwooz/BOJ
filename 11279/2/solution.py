#started at 10:30
import sys

def heapify(start, end):
    # 트리의 위에서부터 맨 아래끝까지 탐색하면서, pos는 두배씩 늘리면서, 부모보다 자식이 크면 스왑한다
    pos = start
    left_pos = pos * 2
    right_pos = pos * 2 + 1
    max_pos = pos

    # 왼쪽자식이 있고, 부모보다 더 크면 스왑
    if left_pos <= end and max(heap[pos], heap[left_pos]) == heap[left_pos] and max(heap[left_pos], heap[right_pos]) == heap[left_pos]:
        max_pos = left_pos
        # heap[pos], heap[left_pos] = heap[left_pos], heap[pos]

    # 오른쪽자식이 있고, 부모보다 더 크면 스왑
    if right_pos <= end and max(heap[pos], heap[right_pos]) == heap[right_pos] and max(heap[left_pos], heap[right_pos]) == heap[right_pos]:
        max_pos = right_pos

    if max_pos != start:
        heap[start], heap[max_pos] = heap[max_pos], heap[start]
        heapify(max_pos, end)

def push(num):
    global idx
    idx += 1
    if idx < len(heap):
        heap[idx] = num
    else:
        heap.append(num)
    # print("heap", heap, 'idx', idx)

    pos = idx
    while pos >= 2:
        if heap[pos // 2] < heap[pos]:
            heap[pos // 2], heap[pos] = heap[pos], heap[pos // 2]
            pos  = pos // 2
            continue
        break

def pop_top():
    global idx
    if idx == 0:
        print(0)
        return

    print(heap[1])

    # 트리의 맨 첫번째 요소를 제거하고 우선 맨 끝값을 가지고 온다.
    # 맨 끝값은 삭제하여 트리의 길이를 1 줄인다
    heap[1] = heap[idx]
    heap[idx] = 0
    heapify(1, idx)
    idx -= 1
    

if __name__ == "__main__":
    N = int(sys.stdin.readline())
    heap = [0]

    global idx
    idx = 0

    for _ in range(N):
        num = int(sys.stdin.readline())
        if num == 0:
            # print('out from', heap)
            pop_top()
            # print('==>', heap,  'idx ', idx, )
        else:
            # print('push into', heap, num)
            push(num)
            # print('==>', heap,  'idx, ', idx, )

