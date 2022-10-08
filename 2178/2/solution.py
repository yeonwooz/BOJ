import sys
from collections import deque
input = sys.stdin.readline

def BFS(i,j):
    q = deque()
    q.append((i,j))
    visited[i].append(j)

    cnt = 0
    while q:
        r,c = q.popleft()
        for i in range(4):
            next_r = r + dx[i]
            next_c = c + dy[i]
            if next_r < 0 or next_c < 0 or next_r >= N or next_c >= M: 
                continue
            if arr[next_r][next_c] == 0:
                continue

            if next_c not in visited[next_r]:
                arr[next_r][next_c] = arr[r][c] + 1    ## 현재까지의 최소경로 기록
                q.append((next_r,next_c))
                visited[next_r].append(next_c)
    print(arr[N-1][M-1])

N,M = map(int, input().split())
dx = [0,+1,0,-1]
dy = [+1,0,-1,0]

arr = []
visited = [[] * M for _ in range(N)]

for _ in range(N):
    row = list(map(int, input().rstrip()))
    arr.append(row)

min_cnt = 100 ** 2
BFS(0,0)