import sys

def quick_sort(array, start, end):
    if start >= end: return
    pivot = start
    left, right = start + 1, end

    while left <= right:
        while left <= end and len(array[left]) <= len(array[pivot]):
            left += 1
        while right > start and len(array[right]) >= len(array[pivot]):
            right -= 1
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[right], array[left] = array[left], array[right]
    quick_sort(array, start, right - 1)
    quick_sort(array, right + 1, end)


N = int(sys.stdin.readline())

list = []
for i in range(N):
    word = sys.stdin.readline().rstrip()
    list.append(word)

quick_sort(list, 0, len(list) - 1)

for i in range(len(list)):
    if i == 0 or list[i-1] != list[i]:
        print(list[i])

