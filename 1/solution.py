import sys
from collections import deque

N, M = map(int, sys.stdin.readline().rsplit())
islands = [[0 for _ in range(M)] for _ in range(N)]
graph = [list(map(int, sys.stdin.readline().rsplit())) for _ in range(N)]
d = ((0,1), (0,-1), (1,0), (-1,0))
edges = []
bridges = []

def isin(y, x):
    # 범위 내에 있는지 확인
    if 0<= y < N and 0 <= x < M: 
        return True
    else:
        return False

def _make_islands(visited, sy, sx, land_cnt):
    # 현재 방문하는 지점 근처를 BFS 탐색하며 섬 지도 완성, 다리정보 추가
    q = deque()
    q.append((sy, sx))

    while q:
        y, x = q.popleft()
        for dy, dx in d:
            ny = y + dy
            nx = x + dx
            if not isin(ny, nx): continue
            if not visited[ny][nx]:
                visited[ny][nx] = True
                if graph[ny][nx] == 1:
                    islands[ny][nx] = land_cnt
                    q.append((ny, nx))
                    bridges.append((ny, nx, land_cnt))

def make_islands():
    # 정사각형 DFS 탐색하면서 섬 정보 탐색, 다리 정보 탐색
    visited = [[False for _ in range(M)] for _ in range(N)]
    land_cnt = 1
    for i in range(N):
        for j in range(M):
            if not visited[i][j] and graph[i][j] == 1:
                visited[i][j] = True
                islands[i][j] = land_cnt
                bridges.append((i, j, land_cnt))
                _make_islands(visited, i, j, land_cnt)
                land_cnt += 1
    
    return land_cnt

def _find_routes(sy, sx, k):
    # 현재 다리가 연결되는 다른 섬까지의 거리를 BFS 탐색
    q = deque()
    
    for dy, dx in d:
        q.append((sy, sx))
        visited = [[False for _ in range(M)] for _ in range(N)]
        visited[sy][sx] = True
        table = [[0 for _ in range(M)] for _ in range(N)]

        while q:
            y, x = q.popleft()
            ny = y + dy
            nx = x + dx

            if not isin(ny, nx): continue
            if not visited[ny][nx]:
                visited[ny][nx] = True
                if islands[ny][nx] == 0:
                    table[ny][nx] = table[y][x] + 1
                    q.append((ny, nx))
                    
                elif islands[ny][nx] != k and table[y][x] >= 2:
                    # 연결될 edge 확정
                    edges.append((table[y][x], k, islands[ny][nx]))

def find_routes():
    # 다리 후보들 전체 탐색
    for y, x, k in bridges:
        _find_routes(y, x, k)

# 섬, 다리 생성
n = make_islands() - 1

# 다리 후보들 중 알맞은 경로 탐색
find_routes()

# MST
union_finds = [-1 for _ in range(n+1)]

def find(a):
    if union_finds[a] < 0: return a
    union_finds[a] = find(union_finds[a])
    return union_finds[a]

def merge(a, b):
    a = find(a)
    b = find(b)
    if a == b: return False
    union_finds[b] = a
    return True

edges.sort()
total, cnt = 0, 0

# 연결할 edges 가운데, 최소 비용의 경로 선택
for w, a, b in edges:
    if merge(a, b):
        total += w
        cnt += 1
        if cnt == n - 1: break
if cnt == n - 1: print(total)
else: print(-1)
            