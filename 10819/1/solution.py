import sys

global max_sum
max_sum = 0

def get_sum(list, indices):
    global max_sum
    sum = 0
    for i in range(1, len(indices)):
        sum += abs(list[indices[i-1]] - list[indices[i]])
        if sum > max_sum:
            max_sum = sum
    return max_sum

def recur(N, visited, arr):
    if len(visited) == N:
        # print(visited) # 식의 최댓값 구하기
        get_sum(arr, visited)
        return
    for i in range(len(arr)):
        if i not in visited:
            visited.append(i)
            recur(N, visited, arr)
            visited.pop()



N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

visited = []
for i in range(len(arr)):
    visited.append(i)
    recur(N, visited, arr)
    visited = []

print(max_sum)