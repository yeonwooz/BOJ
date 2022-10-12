#started at 4:04
import sys
input = sys.stdin.readline
from collections import deque

dr = [-1,-1,+1,+1]
dc = [-1,+1,-1,+1]

imp_r = [-1,+1,0,0]
imp_c = [0,0,-1,+1]

def BFS(n,visited, x1, x2, y1, y2):
    distances = [[1e9] * (n+1) for _ in range(n+1)]
    answer = []
    cnt = 0
    q = deque()
    q.append((0, x1,x2))
    distances[x2][x1] = 0

    while q:
        cnt, c,r = q.popleft()
        # print('r,c',r,c)
        if r == y2 and c == y1:
            answer.append(chr(c+64))
            answer.append(n + 1 -r)
            print(cnt, *answer)
            return

        for idx in range(4):
            if r + imp_r[idx] == y2 and c + imp_c[idx] == y1:
                print("Impossible")
                return
        
        for idx in range(4):
            n_r = r + dr[idx]
            n_c = c + dc[idx]
            if 0 < n_r < n + 1 and 0 < n_c < n + 1:
                if not visited[n_r][n_c] and distances[n_r][n_c] > cnt + 1:
                    visited[n_r][n_c] = 1 
                    distances[n_r][n_c] = cnt + 1
                    q.append((cnt + 1, n_c,n_r))
                    answer.append(chr(n_c+64))
                    answer.append((n+1) - n_r)

T = int(input())

for _ in range(T):
    n = 8
    x1,x2,y1,y2 = input().split()
    x2,y2 = (n+1) - int(x2), (n+1) - int(y2)
    x1,y1 = ord(x1) - 64, ord(y1) - 64
    visited = [[0] * (n+1) for _ in range(n+1)]
    # print("start")
    BFS(n, visited, x1,x2,y1,y2)