import sys
N = int(sys.stdin.readline())

queens = [-1] * N
used = [False] * N
cnt = 0

def is_promising(cur_col):
    for col in range(cur_col):
        if queens[col] == queens[cur_col]:
            return False
        if abs(col - cur_col) == abs(queens[col] - queens[cur_col]):
            return False
    return True

def nQueen(cur_col):
    global cnt
    if cur_col == N:
        cnt += 1
        return

    for i in range(N):
        if used[i] == False:
            queens[cur_col] = i
            if is_promising(cur_col):
                used[i] = True
                nQueen(cur_col + 1)
                used[i] = False
nQueen(0)
print(cnt)
# if N % 2 > 0 :
#     nQueen(0, 0, True)
#     cnt *= 2
# else:
#     nQueen(0, 0, False)






