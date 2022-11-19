# 17829 222 풀링/ 수연
#started at 10:35
import sys
n = int(sys.stdin.readline())

arr = [[] for _ in range(n)]
for i in range(n):
    arr[i] = list(map(int, sys.stdin.readline().split()))

def recur(sidelen, matrix):
    if sidelen == 1:
        return
    
    next_sidelen = 2
    next_row_cnt = sidelen // 2
    next_col_cnt = sidelen // 2
    # newarr = [[] for _ in range(sidelen)]

    for i in range(next_row_cnt):
        # 0 1 2 3
        start_i = i * 2
        # 0 2 4 6
        for j in range(next_col_cnt):
            start_j = j * 2

            print(start_i,start_j)


recur(n, arr)