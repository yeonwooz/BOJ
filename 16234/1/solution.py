# 인구 이동 
# https://www.acmicpc.net/problem/16234
# started at 11:24

import sys
from collections import deque
def getInput():
    return sys.stdin.readline().rstrip()

N,L,R = map(int, getInput().split())

matrix = []
for i in range(N):
    arr = list(map(int, getInput().split()))
    matrix.append(arr)

colorIdx = 1
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

#국경선 열기, 연합국가 표시
def BFS(a,b):
    q =  deque()
    allies = []
    q.append((a,b))
    allies.append((a,b))

    while q:
        r,c = q.popleft()
        for i in range(4):
            nr = r + dr[i]
            nc = c + dc[i]
            if 0 <= nr < N and 0 <= nc < N and visited[nr][nc] == 0:
                if L <= abs(matrix[r][c] - matrix[nr][nc]) <= R:
                    visited[nr][nc] = 1
                    q.append((nr,nc))
                    allies.append((nr,nc))
    return allies


# # 인구이동
# for color in range(1, colorIdx):
days = 0
while True:
    visited = [[0] * (N+1) for _ in range(N+1)]
    flag = 0
    for i in range(N):
        for j in range(N):
            if visited[i][j] == 0:
                visited[i][j] = 1
                country = BFS(i,j)
            
                if len(country) > 1:
                    flag = 1
                    # (연합의 인구수) / (연합을 이루고 있는 칸의 개수)
                    people = sum([matrix[x][y] for x, y in country]) // len(country)
                    for r,c in country:
                        matrix[r][c] = people
    # 연합을 해체하고, 모든 국경선을 닫는다.
    if flag == 0:
        break
    days += 1
print(days)
