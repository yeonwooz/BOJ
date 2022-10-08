import sys

def visit_DFS(i, j):
    global group_num
    for idx in range(4):
        next_i = i+dr[idx]
        next_j = j+dc[idx]
        if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M: 
            continue
        if visited[next_i][next_j] == False and arr[next_i][next_j] == 0:
            visited[next_i][next_j] = group_num
            visit_DFS(next_i, next_j)
    group_num += 1

def melt(visited):
    global N, M
    for i in range(N):
        for j in range(M):
            # 바다라면 스킵
            if arr[i][j] == 0: continue
            
            # arr[i][j]가 빙산이면 (숫자면) 인접한 바다 면적만큼 빼기 (음수전까지)
            melt_cnt = 0
            for idx in range(4):
                next_i = i+dr[idx]
                next_j = j+dc[idx]
                if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M: 
                    continue
                if visited[next_i][next_j] == False and arr[next_i][next_j] == 0:
                    melt_cnt += 1
            
            arr[i][j] = max(0, arr[i][j] - melt_cnt)
            visit_DFS(i,j)

def all_melted():
    for i in range(N):
        for j in range(M):
            if arr[i][j] > 0:
                return False
    return True

N,M = map(int, sys.stdin.readline().split())
group_num = 1
arr = []
for i in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    arr.append(row)

year = 0

dr = [0, -1, 0, +1] # 시계방향으로 생각하면 편함
dc = [-1, 0, +1, 0]

while True:
    visited = [[False] * M for _ in range(N)]
    print(arr)
    if group_num >= 2: 
        break
    
    if all_melted(): 
        break
    # if  year == 2: break

    year += 1
    # 1년 뒤 녹음
    melt(visited)

if group_num >= 2:  
    print(year)
else:
    print(0)