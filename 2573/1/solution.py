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
            melting_list.append((i,j, sea_cnt))

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
        if row[j] > 0: 
            ice.append((i,j))

year = 0
group_num = 1
dr = [0, -1, 0, +1] # 시계방향으로 생각하면 편함
dc = [-1, 0, +1, 0]

while True:
    print(arr)

    # if group_num >= 2: break
    if  year == 3: break

    year += 1
    # 1년 뒤 녹음
    # visited = [[False] * M for _ in range(N)]
    visited = [[] * M for _ in range(N)] 
    for i, j in ice:
        group_num += melt(i, j, visited)
    
print(year)