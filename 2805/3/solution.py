import sys

MAX_HEIGHT_FIGURE = 1000000000
MIN_HEIGHT_FIGURE = 0

total_len = 0
H = 0

def get_total_height(height, trees):
    sum = 0
    for tree_h in trees:
        if tree_h >= height:
            sum += (tree_h - height)
    return sum

def bin_search(trees, max_h, M):
    start = 0
    end = max_h

    while start < end:
        mid_h = (start + end) // 2
        if get_total_height(mid_h, trees) < M:
            end = mid_h
        else:
            start = mid_h + 1
            global H
            if H < mid_h:
                H = mid_h
    return mid_h

def solve(N, M, trees):
    max_h = max(trees)
    bin_search(trees, max_h, M)
    print(H)

if __name__ == "__main__":
    N, M = map(int, sys.stdin.readline().split())
    trees = list(map(int, sys.stdin.readline().split()))
    solve(N, M, trees)