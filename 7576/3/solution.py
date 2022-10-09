#started at 9:31
import sys
input = sys.stdin.readline
from collections import deque

def BFS():
    global days  # 현재까지 소요된 날짜 
    dr = [-1,1,0,0]
    dc = [0,0,-1,1]

    q = deque()
    depth = 0
    cnt_zero = 0
    cnt_one = 0
    for i in range(N):
        for j in range(M):
            if box[i][j] == 1:
                # 익은 칸만 q에 push
                q.append((i,j,depth)) # depth
                visited[i][j] = 1
                cnt_one += 1
            elif box[i][j] == 0:
                cnt_zero += 1
    if cnt_one == 0:
        # 시작하자마자 다 익어있다면 (토마토 없는 칸은 제외)
        return

    while q:
        r,c, new_depth = q.popleft()   
        # print(r,c, new_depth)
        if depth < new_depth:
            days = new_depth
        for idx in range(4):
            n_r = r + dr[idx]
            n_c = c + dc[idx]
            if 0 <= n_r < N and 0 <= n_c < M and visited[n_r][n_c] == 0:
                if box[n_r][n_c] == 0:
                    q.append((n_r,n_c, new_depth+1))
                    visited[n_r][n_c] = 1
                    box[n_r][n_c] =  1

M,N = map(int, input().split())

box = []
visited = [[0] * M  for _ in range(N)]
for i in range(N):
    box.append(list(map(int, input().split())))

days = 0
BFS()
print(days)