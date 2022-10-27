#11497 통나무 건너뛰기 우수연
# started at 12:02
from itertools import permutations

def get_max_diff(arr):
    l = len(arr)
    diff = abs(arr[l-1] - arr[0])
    for i in range(l-1):
        diff = max(diff, abs(arr[i]-arr[i+1]))
    return diff

def solve(trees):
    perms = permutations(trees,len(trees))
    answer = 100000
    for p in perms:
        answer = min(answer, get_max_diff(list(p)))
    print(answer)

T = int(input())
for _ in range(T):
    N = int(input())
    trees = list(map(int, input().split()))
    solve(trees) 