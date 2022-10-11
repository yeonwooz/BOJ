import sys
from collections import deque

def melt(i, j, visited):
    queue = deque()
    queue.append((i,j))

    visited[i].append(j)
    melting_list = []
    while queue:
        r,c =  queue.popleft()
        
        sea_cnt = 0
        for idx in range(4):
            next_i = r + dr[idx]
            next_j = c + dc[idx]
            if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M:
                continue

            if next_j not in visited[next_i]:
                if arr[next_i][next_j] == 0:
                    # 주변이 바다일 때
                    sea_cnt += 1
                else: 
                    # 인접한 곳으로 이동할 수 있을 때, 더 갈수 있을때까지 이동
                    # melt(next_i, next_j, visited)
                    queue.append((next_i, next_j))
                    visited[next_i].append(next_j)

        if sea_cnt > 0:
            melting_list.append((r, c, sea_cnt))

    ## 인근 탐색이 끝나고 나면 빙산 높이를 깎는다 
    for u,v,cnt in melting_list:
        arr[u][v] = max(0, arr[u][v] - cnt)

    return 1

N,M = map(int, sys.stdin.readline().split())

arr = []
ice = []
for i in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    arr.append(row)
    for j in range(M):
        if arr[i][j]:
            ice.append((i,j))

year = 0

dr = [0, -1, 0, +1] # 시계방향으로 생각하면 편함
dc = [-1, 0, +1, 0]

while ice:
    visited = [[] * M for _ in range(N)] 
    delList = []
    group = 0
    for i, j in ice:
        if arr[i][j] and j not in visited[i]:
            melt(i, j, visited)
            group += 1
        if arr[i][j] == 0:
            delList.append((i,j))
    if group > 1:
        print(year)
        break
    ice = sorted(list(set(ice) - set(delList)))
    year += 1    


if group < 2:
    print(0)