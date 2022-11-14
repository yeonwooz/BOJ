#1012 유기농 배추 / 수연
import sys
T = int(sys.stdin.readline())
sys.setrecursionlimit(10**4) 

dr = [-1,1,0,0]
dc = [0,0,-1,1]

def DFS(r,c,visited):
    visited[r][c] = 1

    for i in range(4):
        nr = r + dr[i]
        nc = c + dc[i]

        if 0 <= nr < N and 0 <= nc < M and not visited[nr][nc] and arr[nr][nc]:
            DFS(nr,nc,visited)

for _ in range(T):
    M, N, K = map(int, sys.stdin.readline().split())
    
    arr = [[0] * (M) for _ in range(N)]
    for _ in range(K):
        x,y = map(int, sys.stdin.readline().split())  
        arr[y][x] = 1
    
    # each case starts
    answer = 0
    visited = [[0] * (M) for _ in range(N)]

    for i in range(N):
        for j in range(M):
            if not visited[i][j] and arr[i][j]:
                answer += 1
                DFS(i,j, visited)

    print(answer)