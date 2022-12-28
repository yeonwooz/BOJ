import sys
from collections import deque

def getInput():
    return sys.stdin.readline().rstrip()

N = int(getInput())
K = int(getInput())

arr = []
for i in range(N):
    arr.append([0] * N)

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
t = 1

dr = [1, 0, -1, 0]
dc = [0, 1, 0, -1]
#     R  D  L  U
i = 0

tracks = deque()

while True:
    t += 1
    if t in mvs:
        mv = mvs[t]
        if mv == 'L': # 왼쪽
            i -= 1
            i = i % 4
        elif mv == 'D': # 오른쪽
            i += 1
            i = i % 4

    head_x += dr[i]
    head_y += dc[i]

    if head_x < 0 or head_x >= N or head_y < 0 or head_y >= N:
        break

    if (arr[head_x][head_y] == -1):
        break
    
    arr[head_x][head_y] = -1;
    tracks.append((head_x, head_y))

    if arr[head_x][head_y] == 0: # 사과 있는 칸
        tail_x, tail_y = tracks.popleft()
        arr[tail_x][tail_y] = 0

print(t)




