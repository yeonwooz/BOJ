import sys
from collections import deque

# def visit_DFS(i, j):
#     global group_num
#     visited[i][j] = group_num
#     for idx in range(4):
#         next_i = i+dr[idx]
#         next_j = j+dc[idx]
#         if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M:
#             continue

#         if visited[next_i][next_j] == False and arr[next_i][next_j] > 0:
#             # visited[next_i][next_j] = group_num
#             visit_DFS(next_i, next_j)
            

def melt(visited):
    global group_num
    
    for i in range(N):
        for j in range(M):
            visited[i][j] = group_num
            # 바다라면 스킵
            if arr[i][j] == 0: continue
            
            # 빙산이면 바다면적만큼 빼기 (음수전까지)
            melt_cnt = 0

            for idx in range(4):
                next_i = i+dr[idx]
                next_j = j+dc[idx]
                if next_i < 0 or next_j < 0 or next_i >= N or next_j >= M:
                    continue
                if visited[next_i][next_j] == False and arr[next_i][next_j] == 0:
                    melt_cnt += 1
                if visited[next_i][next_j] == False and arr[next_i][next_j] > 0:
                    visited[next_i][next_j] = group_num
            arr[i][j] = max(0, arr[i][j] - melt_cnt)

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
    print("group_num", group_num, "arr", arr)

    if year == 3: break
    # if group_num >= 2: break

    year += 1
    # 1년 뒤 녹음
    visited = [[False] * M for _ in range(N)]
    melt(visited)
    
print('year', year)