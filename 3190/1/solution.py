#https://hongcoding.tistory.com/127
from collections import deque
import sys
N = int(sys.stdin.readline())
K = int(sys.stdin.readline())

graph = [[0] * N for _ in range(N)] 
# N * N 그래프 생성 

dx = [0,1,0,-1]
dy = [1,0,-1,0]
# x축, y축 진행방향 모멘텀

for i in range(K):
    a, b = map(int, sys.stdin.readline().split())
    graph[a - 1][b - 1] = 2 
    # 사과 배치

l = int(sys.stdin.readline())

dirDict = dict() 
# 방향
queue = deque()
queue.append((0,0))

for i in range(l):
    X,C = sys.stdin.readline().split()
    dirDict[int(X)] = C 
    # X초에 바꿀 방향

x,y = 0,0
graph[x][y] = 1
time = 0
direction = 0

def turn(to):
    global direction
    if to == 'L':
        direction = (direction - 1) % 4  
        # !!!!! 나머지연산을 통해 방향전환 모멘텀 인덱스를 일반화할 수 있다!!
    else: 
        direction = (direction + 1) % 4

while True:
    time += 1
    x += dx[direction]
    # 이번에 하는 x축 이동
    y += dy[direction]
    # 이번에 하는 y축 이동

    if x < 0 or x >= N or y < 0 or y >= N:
        # 벽에 충돌 => 게임끝
        break

    if graph[x][y] == 2:
        # 사과먹음. 길이 유지
        graph[x][y] = 1 # 방문했다고 표시
        queue.append((x,y))

        if time in dirDict:
            # 방향전활할 시간
            turn(dirDict[time])
        
    elif graph[x][y] == 0:
        # 사과 없음. 길이 잘림
        graph[x][y] = 1 # 방문했다고 표시
        queue.append((x,y))
        tx, ty = queue.popleft() # 길이 잘림
        graph[tx][ty] = 0

        if time in dirDict:
            # 방향전활할 시간
            turn(dirDict[time])

    else:
        # 이미 방문한 곳 도착 => 게임끝
        break
print(time)