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
    answer = []
    i = 0
    while trees: 
        popped = trees.pop()
        if i == 0:
            answer.append(popped)
        elif i % 2 > 0:
            answer = [popped] + answer
        elif i % 2 == 0:
            answer.append(popped)
        i += 1
    df = get_max_diff(answer)
    print(df)
T = int(input())
for _ in range(T):
    N = int(input())
    trees = list(map(int, input().split()))
    trees.sort()
    solve(trees) 