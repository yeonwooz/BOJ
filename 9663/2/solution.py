import sys
N = int(sys.stdin.readline())

board = [-1] * N
# 0열부터 채우고 시작할 것이라서 초기화를 0으로 해도 됨. 초기 수가 무슨 숫자든 괜찮음 
global cnt
cnt = 0

def promising(j, col_cnt, i):
    # 현재 j열의 i행에 퀸을 놓았는데, 괜찮은가?

    # 이전 열들 (j)
    # 만약 이전 열들의 값이 현재 값이랑 같거나
    # 대각선 조건이거나(대각선이면 열차와 행차가 같다)
    if (board[j] == board[col_cnt]) or (j - col_cnt == board[j] - board[col_cnt]) or (j - col_cnt == board[col_cnt] - board[j]):
        return False
    return True

def nQueen(N, col_cnt):
    global cnt
    # 0열부터 시작해서 채워지기 시작했고, 채워진 열의 수 (col_cnt) 가 N개가 되면 종료
    if col_cnt == N:
        cnt += 1
        return
    
    for i in range(N):
        # 모든 행에 대해서
        check = True
        for j in range(col_cnt):
            #현재까지 채운 열들을 가지고 검사할 것임.
            board[col_cnt] = i
            # 일단 이번 열을 i행으로 채우고,
            # if promising(j, col_cnt, i) == False: 
            #     check = False
            #     break
            if promising(j, col_cnt, i) == False:
                check = False
                break
        if check == True:
            # 검사에서 통과했다면, 이 열은 채웠고 다음 열로 이동한다
            nQueen(N, col_cnt + 1)

for i in range(N):
    board[0] = i
    nQueen(N, 1)

print(cnt)