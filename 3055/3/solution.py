#started at 3:50
import sys
from collections import deque
input = sys.stdin.readline

def BFS():
    di = [-1,1,0,0]
    dj = [0,0,-1,1]

    global time
    q = deque()
    for r in range(R):
        for c in range(C):
            if graph[r][c] == '*' or graph[r][c] == 'S':
                q.append((time, r, c, graph[r][c]))

    while q:
        global found_D
        time, i, j, who = q.popleft()
        # print(i,j,who)
        if graph[i][j] == 'D':
            print(time)
            found_D = True
            return  
        graph[i][j] = who
        visited[i][j] = 1
        for idx in range(4):
            n_i = i + di[idx]        
            n_j = j + dj[idx]        

            if 0 <= n_i < R and 0 <= n_j < C and visited[n_i][n_j] == 0:
                if (graph[n_i][n_j] == '.' or graph[n_i][n_j] == 'D') and graph[i][j] == 'S':
                    #고슴이 이동 가능
                    graph[i][j] = '.'
                    # graph[n_i][n_j] = 'S'
                    visited[n_i][n_j] = 1
                    q.append((time+1, n_i, n_j, 'S'))
                elif (graph[n_i][n_j] == '.' or graph[n_i][n_j] == 'S') and graph[i][j] == '*':
                    # 물 이동 가능
                    # 고슴이가 있는 자리를 물로 덮어쓴다. 왜냐하면 고슴이는 다음턴에 물이 이동할 자리로 못가기 때문이다.
                    # graph[n_i][n_j] = '*'
                    visited[n_i][n_j] = 1
                    q.append((time+1, n_i, n_j, '*'))

graph = []
R,C = map(int, input().split())
visited = [[0] * C for _ in range(R)]
for _ in range(R):
    row = list(input().rstrip())
    graph.append(row)

time = 0
found_D = False
BFS()
if not found_D:
    print("KAKTUS")