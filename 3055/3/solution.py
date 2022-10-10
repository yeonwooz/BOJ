#started at 3:50
import sys
from collections import deque
input = sys.stdin.readline

def BFS():
    di = [-1,1,0,0]
    dj = [0,0,-1,1]

    q = deque()

    Dx, Dy = 0,0
    for r in range(R):
        for c in range(C):
            if graph[r][c] == 'S':
                q.append((r, c, graph[r][c]))
            elif graph[r][c] == 'D':
                Dx, Dy = r,c

# queue에 고슴도치 위치를 넣어준후에 물에 위치를 넣어줬다 고슴도치가 먼저 이동하고 물이 차도록 만듬

# => 고슴도치가 이동했더라도 물이 이동할 위치라면 고슴도치를 덮어쓰기 때문
# (https://wookcode.tistory.com/167)

    for r in range(R):
        for c in range(C):
            if graph[r][c] == '*':
                q.append((r, c, graph[r][c]))

    while q:
        i, j, who = q.popleft()
        # print(i,j,who)
        if graph[Dx][Dy] == 'S':
            return times[Dx][Dy]
        for idx in range(4):
            n_i = i + di[idx]        
            n_j = j + dj[idx]        

            if 0 <= n_i < R and 0 <= n_j < C:
                if (graph[n_i][n_j] == '.' or graph[n_i][n_j] == 'D') and graph[i][j] == 'S':
                    #고슴이 이동 가능
                    graph[n_i][n_j] = 'S'
                    times[n_i][n_j] = times[i][j] + 1
                    q.append((n_i, n_j, 'S'))
                elif (graph[n_i][n_j] == '.' or graph[n_i][n_j] == 'S') and graph[i][j] == '*':
                    # 물 이동 가능
                    # 고슴이가 있는 자리를 물로 덮어쓴다. 왜냐하면 고슴이는 다음턴에 물이 이동할 자리로 못가기 때문이다.
                    graph[n_i][n_j] = '*'
                    # visited[n_i][n_j] = 1
                    q.append((n_i, n_j, '*'))
    return "KAKTUS"

graph = []
R,C = map(int, input().split())
times = [[0] * C for _ in range(R)]
for _ in range(R):
    row = list(input().rstrip())
    graph.append(row)

# time = 0

print(BFS())