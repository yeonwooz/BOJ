import sys
from collections import deque

def getInput():
    return sys.stdin.readline().rstrip()

N = int(getInput())
K = int(getInput())

arr = []
for i in range(N):
    arr.append([0] * (N))

for i in range(K):
    row, col = map(int, getInput().split())
    arr[row-1][col-1] = 1

L = int(getInput())

mvs = dict()
for i in range(L):
    X, C = getInput().split()
    mvs[int(X)] = C

# t초 후에 뱀의 머리위치가 (x,y)이다
# (x,y) 가 범위 바깥 => 게임오버
# arr[x][y] == -1 이면 이미 지나간곳 => 게임오버
# arr[x][y] == 0 이면 사과가 없고 처음 온 곳
# arr[x][y] == 1 이면 사과가 있는 곳

head_x = 0
head_y = 0
# tail_x = 0
# tail_y = 0

dr = [1, 0, -1, 0]
dc = [0, 1, 0, -1]
#     R  D  L  U


tracks = deque()
tracks.append((head_x, head_y))
arr[head_x][head_y] = -1

t = 0
i = 0

while True:
    t += 1
    
    head_x += dc[i]
    head_y += dr[i]

    if head_x < 0 or head_x >= N or head_y < 0 or head_y >= N:
        break

    if (arr[head_x][head_y] == -1):
        break
    
    if arr[head_x][head_y] == 1: # 사과 있는 칸
        arr[head_x][head_y] = -1
        tracks.append((head_x, head_y))

    elif arr[head_x][head_y] == 0: # 사과 없는 칸
        arr[head_x][head_y] = -1
        tracks.append((head_x, head_y))
        tail_x, tail_y = tracks.popleft()
        arr[tail_x][tail_y] = 0

    # 게임 시작 시간으로부터 X초가 끝난 '뒤에' 방향 전환! 
    if t in mvs:
        mv = mvs[t]
        if mv == 'L': # 왼쪽
            i -= 1
            i = i % 4
        elif mv == 'D': # 오른쪽
            i += 1
            i = i % 4

print(t)
