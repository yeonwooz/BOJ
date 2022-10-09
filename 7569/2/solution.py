#started at 9:18
# https://www.acmicpc.net/submit/7569
import sys
input = sys.stdin.readline
from collections import deque

def BFS():
    q = deque()

    for i in range(H):
        tmp = []
        for j in range(N): 
            row = list(map(int, input().split())) # 가장 밑의 상자부터시작함. 가장 위까지 익힘 
            tmp.append(row)
            for k in range(M):
                if tmp[j][k] == 1:
                    q.append([i,j,k])
        boxes.append(tmp)
    
    global days  # 현재까지 소요된 날짜 
    dx = [-1,1,0,0,0,0]
    dy = [0,0,-1,1,0,0]
    dz = [0,0,0,0,-1,1]

    while q:
        x,y,z = q.popleft() 

        for i in range(6):
            a =  x+dx[i]
            b =  y+dy[i]
            c =  z+dz[i]

            if 0 <= a < H and 0 <= b < N and 0 <= c < M and boxes[a][b][c] == 0:
                q.append([a,b,c])
                boxes[a][b][c] = boxes[x][y][z] + 1
   

M,N,H = map(int, input().split())
boxes = []
BFS()

days = 0
for i in boxes:
    for j in i:
        for k in j:
            if k == 0:
                print(-1)
                exit()
            days =  max(days, max(j))

print(days-1)
