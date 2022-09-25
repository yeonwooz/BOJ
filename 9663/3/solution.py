import sys
N = int(sys.stdin.readline())

board = [-1] * N
# 0열부터 채우고 시작할 것이라서 초기화를 0으로 해도 됨. 초기 수가 무슨 숫자든 괜찮음 
global cnt
cnt = 0

def is_promising(col_cnt):
    # 현재 j열의 i행에 퀸을 놓았는데, 괜찮은가?

    # 이전 열들 (j)
    # 만약 이전 열들의 값이 현재 값이랑 같거나
    # 대각선 조건이거나(대각선이면 열차와 행차가 같다)
    for i in range(col_cnt):
        if board[col_cnt] == board[i]:
            return False
        if abs(board[col_cnt] - board[i]) == abs(col_cnt - i): 
            return False
    return True

def nQueen(N, col_cnt, visited):
    global cnt
    # 0열부터 시작해서 채워지기 시작했고, 채워진 열의 수 (col_cnt) 가 N개가 되면 종료
    if col_cnt == N:
        cnt += 1
        return
    for i in range(N):
        # 모든 행에 대해서
        if visited[i] == False: 
            board[col_cnt] = i
            if is_promising(col_cnt):
                visited[i] = True
                nQueen(N, col_cnt + 1, visited)
                visited[i] = False

# for i in range(N):
#     board[0] = i
#     nQueen(N, 1)

visited = [False] * N
nQueen(N, 0, visited)
print(cnt)