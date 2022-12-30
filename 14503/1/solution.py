import sys

def getInput():
    return sys.stdin.readline().split()

dr = [-1, 0, 1, 0]   
dc = [0, 1, 0, -1]
#     북 동 남 서

N,M = map(int, getInput())
r,c,d = map(int, getInput())

board = []
for i in range(N):
    board.append(list(map(int, getInput())))

cnt = 1
idx = d
while True:
    moved = False
    for i in range(4):
        idx = (idx - 1) % 4
        nr = r + dr[idx]
        nc = c + dc[idx]

        if 0 <= nr < N and 0 <= nc < M and board[nr][nc] == 0:
            if board[nr][nc] == 0:
                board[nr][nc] = 2    #청소완료
                cnt += 1
                moved = True
                r = nr
                c = nc
                break
            else:
                continue

    if moved == False:
        # if idx == 0: # 현재 북쪽 바라봄
        #     idx = 2
        # elif idx == 1: # 현재 동쪽 바라봄
        #     idx = 3
        # elif idx == 2: # 현재 남쪽 바라봄
        #     idx = 0
        # elif idx == 3: # 현재 서쪽 바라봄
        #     idx = 1
        idx = (idx + 2) % 4
        nr = r + dr[idx]
        nc = c + dc[idx]
        if 0 <= nr < N and 0 <= nc < M and board[nr][nc] == 0:
            if board[nr][nc] == 0:
                r = nr
                c = nc
            else:
                break
        else:
            break

print(cnt)