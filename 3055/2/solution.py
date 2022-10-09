# https://wookcode.tistory.com/167
import sys
input = sys.stdin.readline
from collections import deque
n,m = map(int, input().split())

graph = [list(input().strip()) for _ in range(n)]
distance = [[0] * m for _ in range(n)]
di, dj = [-1,1,0,0], [0,0,-1,1]
q = deque()

def BFS(dx,dy):
    while q:
        x,y = q.popleft()
        
        if graph[dx][dy] == 'S':
            return distance[dx][dy]
        
        for i in range(4):
            nx = x + di[i]
            ny = y + dj[i]

            if nx < 0 or ny < 0 or nx >= n or ny >= m: continue
            
            if (graph[nx][ny] == '.' or graph[nx][ny] == 'D') and graph[x][y] == 'S':
                # 고슴도치가 이동할 수 있을 때
                graph[nx][ny] = 'S'
                distance[nx][ny] = distance[x][y] + 1
                q.append((nx,ny))
            elif (graph[nx][ny] == '.' or graph[nx][ny] == 'S') and graph[x][y] == '*':
                # 물이 이동할 수 있을 때
                graph[nx][ny] == '*'
                q.append((nx,ny))
    return "KAKTUS"

for x in range(n):
    for y in range(m):
        if graph[x][y] == 'S':
            q.append((x,y))
        elif graph[x][y] == 'D':
            dx, dy = x,y

for x in range(n):
    for y in range(m):
        if graph[x][y] == '*':
            q.append((x,y))

print(BFS(dx,dy))