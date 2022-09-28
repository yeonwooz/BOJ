import sys

def heap_sort(ls):
    def down_heap(ls, left, right):
        temp = ls[left]
        parent = left

        while parent < (right + 1) // 2:
            cl = parent * 2 + 1
            cr = cl + 1
            child = cr if cr <= right and ls[cr] <= ls[cl] else cl # 작은 값을 선택
            if temp <= ls[child]:
                break
            ls[parent] = ls[child]
            parent = child
        ls[parent] = temp
    
    n = len(ls)

    for i in range((n-1) //2, -1, -1):
        down_heap(ls, i, n-1)
    
    for i in range(n-1, 0, -1):
        ls[0], ls[i] = ls[i], ls[0]
        down_heap(ls, 0, i - 1)

N = int(sys.stdin.readline())
nums = []

for _ in range(N):
    try:
        nums.append(int(sys.stdin.readline()))
    except:
        break

heap_sort(nums)
print("\n".join(str(s) for s in nums))
