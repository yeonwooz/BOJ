#11497 통나무 건너뛰기 우수연
# started at 12:02

def solve(trees, N):
    max_diff = 0
    for i in range(N - 2):
        diff = trees[i+2] - trees[i]
        # 2 차이 일 때 가장 평탄하다
        if diff > max_diff:
            max_diff = diff
    print(max_diff)

T = int(input())
for _ in range(T):
    N = int(input())
    trees = list(map(int, input().split()))
    trees.sort()
    solve(trees, N) 