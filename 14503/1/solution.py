import sys

def getInput():
    return sys.stdin.readline().split()

dr = [-1, 0, 1, 0]   
dc = [0, 1, 0, -1]
#     북 동 남 서

N,M = map(int, getInput())
r,c,d = map(int, getInput())
r -= 1
c -= 1

board = []
for i in range(N):
    board.append(list(map(int, getInput())))

cnt = 1
board[r][c] = 2
idx = d
while True:
    print(r,c, idx)
    print(board)
    print()
    moved = False
    for i in range(4):
        idx = (idx - 1) % 4
        nr = r + dr[idx]
        nc = c + dc[idx]

        # if 0 <= nr < N and 0 <= nc < M and board[nr][nc] == 0:
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
        next_pos = (idx + 2) % 4
        nr = r + dr[next_pos]
        nc = c + dc[next_pos]
        if board[nr][nc] == 1:
            break
            
        else:
            r = nr
            c = nc

print(cnt)