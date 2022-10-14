#staretd at 10:22
#18405 경쟁적 전염
import sys
from collections import deque
from heapq import heappush, heappop
input = sys.stdin.readline

N,K = map(int, input().split()) # N*N 행렬,  바이러스의 번호는 1~K
# print(N,K)
graph = []

for _ in range(N):
    row = list(map(int, list(input().split())))
    graph.append(row)

S,X,Y = map(int, input().split())  # S초가 지난 후에 X-1행 Y-1열에 위치한(1,1부터 시작했으므로) 바이러스의 번호 출력/ 없으면 0 출력 

dr = [-1,1,0,0]
dc = [0,0,-1,1]
heap = []
q = deque()
# q에는 번호가 낮은 순으로 넣어야 함. heap으로 관리 필요

def BFS():
    while heap:
        # 초마다 heap이 달라짐
        q.append(heappop(heap))

    while q:
        v_num, r, c, t = q.popleft()
        # if t == S + 1:
        #     return

        for i in range(4):
            n_r = r + dr[i]
            n_c = c + dc[i]
            if n_r < 0 or n_c < 0 or n_r >= N or n_c >= N:
                # 그래프 범위 바깥이면 진행 불가
                continue 
            if graph[n_r][n_c] > 0:
                # 이미 바이러스 존재하면 진행불가
                continue

            graph[n_r][n_c] = v_num
            heappush(heap, (v_num, n_r, n_c, t+1)) 

### 1,1부터 시작한다는 점에 유의할 것!!
# time = 0
# if S > 0:
#     BFS()

for i in range(N):
    # 0초때의 첫번째 바이러스들을 일단 담아둔다 
    for j in range(N):
        if graph[i][j] > 0:
            heappush(heap, (graph[i][j], i,j, 0)) # 번호가 낮은 종류의 바이러스부터 출력되도록 우선순위큐에 담는다

for i in range(S):
    #매 초마다 BFS 돌림
    BFS()

v = graph[X-1][Y-1]
print(v if v else 0)