#https://hongcoding.tistory.com/127
from collections import deque
import sys

# 1. N * N 그래프를 생성하고, 방문한적 없는 칸들이므로 0으로 채운다
N = int(sys.stdin.readline())
K = int(sys.stdin.readline())
graph = [[0] * N for _ in range(N)] 

# 2. 사과 배치. 사과가 있는 칸은 2이다
for i in range(K):
    a, b = map(int, sys.stdin.readline().split())
    graph[a - 1][b - 1] = 2 

# 3. x축, y축 방향전환 배열 생성
dx = [0,1,0,-1]
dy = [1,0,-1,0]

# 4. 시간대별 바꿀 방향 정보를 딕셔너리 배열로 담아둠 {시간 : 방향}
dirDict = dict() 
l = int(sys.stdin.readline())
for i in range(l):
    X,C = sys.stdin.readline().split()
    dirDict[int(X)] = C 

# 5. 뱀 궤적 큐를 생성하고 초기위치(0,0) 넣어두고 그래프의 첫 칸 방문 (0 => 1)
x,y = 0,0
queue = deque()
queue.append((x,y))
graph[x][y] = 1

# 6. 시간과 방향 초기화 
time = 0
direction = 0

# 7. 방향전환 함수 생성. 기존 방향과 회전 방향 (L 또는 D)를 인자로 받고 방향을 리턴한다. 
# 방향은 우회전이면 0, 1, 2, 3, 0, 1, 2, 3.. / 좌회전이면 0, -1, -2, -3, 0, -1, -2, -3...
def turn(direction: int, to : str) -> int:
    if to == 'L':
        direction = (direction - 1) % 4  
        # !!!!! 나머지연산을 통해 방향전환 모멘텀 인덱스를 일반화할 수 있다!!
    else: 
        direction = (direction + 1) % 4
    return direction

# 8. 뱀 이동 시작. 벽에 충돌하거나 이미 방문한 칸(1)에 도착하면 while문 탈출
while True:
    time += 1
    # 시간이 1초 증가
    x += dx[direction]
    # 이번에 하는 x축 이동
    y += dy[direction]
    # 이번에 하는 y축 이동

    if x < 0 or x >= N or y < 0 or y >= N:
        # 벽에 충돌 => 게임끝
        break
    
    if graph[x][y] == 1:
        # 이미 방문한 곳 도착 => 게임끝
        break

    if graph[x][y] == 2:
        # 사과먹음. 큐에 칸 추가 후 길이 유지
        graph[x][y] = 1 # 방문했다고 표시
        queue.append((x,y)) # 큐에 칸 추가

    elif graph[x][y] == 0:
        # 사과 없음. 큐에 칸 추가 후 왼쪽 한칸 잘림
        graph[x][y] = 1 # 방문했다고 표시
        queue.append((x,y)) # 큐에 칸 추가
        tx, ty = queue.popleft() # 왼쪽 한칸 잘림
        graph[tx][ty] = 0 # 꼬리가 잘렸으므로 방문하(고 있)지 않은 칸으로 변경

    if time in dirDict:
        # 방향전환할 시간
        direction = turn(direction, dirDict[time])

print(time)