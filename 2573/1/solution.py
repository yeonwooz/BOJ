import sys
from collections import deque

def visit_BFS(i, j):
    global group_num
    visited[i][j] = group_num
    # queue =  deque()
    # queue.append((i,j))

    # while(queue):
    #     r,c = queue.popleft()

    #     for idx in range(4):
    #         next_i = r+dr[idx]
    #         next_j = c+dc[idx]
    #         if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M:
    #             continue

    #         if visited[next_i][next_j] == False and arr[next_i][next_j] == 0:
    #             visit_BFS(next_i, next_j)

def melt_BFS(i, j, visited):
    global group_num
    queue = deque()
    queue.append((i, j))
    seaList = []

    while queue:
        u,v = queue.popleft()

        # 바다라면 스킵
        if arr[u][v] == 0: continue
        
        # 빙산이면 바다 면적만큼 빼기 (음수전까지)
        melt_cnt = 0
        for idx in range(4):
            next_i = u + dr[idx]
            next_j = v + dc[idx]
            if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M:
                continue

            if visited[next_i][next_j] == False and arr[next_i][next_j] == 0:
                melt_cnt += 1
            elif visited[next_i][next_j] == False and arr[next_i][next_j] > 0:
                queue.qppend((next_i, next_j))
                visited[next_i][next_j] = 1
        if melt_cnt > 0:
            seaList.append((u,v,melt_cnt))
    
    for u,v,melt_cnt in seaList:
        arr[u][v] = max(0, arr[u][v] - melt_cnt)
                
    return 1

def divided():
    return

N,M = map(int, sys.stdin.readline().split())

arr = []
for i in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    arr.append(row)

year = 0
group_num = 1
dr = [0, -1, 0, +1] # 시계방향으로 생각하면 편함
dc = [-1, 0, +1, 0]

while True:
    print(arr)
    # if divided():
    #     break
    # if group_num >= 2: break
    if  year == 2: break

    year += 1
    # 1년 뒤 녹음
    visited = [[False] * M for _ in range(N)]
    group_num += melt_BFS(0,0, visited)
    
print(year)