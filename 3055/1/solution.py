#started at 10:56
import sys
input = sys.stdin.readline
from collections import deque

def BFS():
    time = 0
    di = [-1,+1,0,0]
    dj = [0,0,-1,+1]

    mvq = deque() # 다음턴에 변경할 칸들

    for i in range(R):
        for j in range(C):
            if graph[i][j] == '*':
                # 물 있는 칸 다음번에 인접칸까지 확장
                mvq.append((i,j,'*', time))
            if graph[i][j] == 'S':
                # 고슴도치 다음번에 이동
                mvq.append((i,j,'S', time))

    while mvq:
        print(graph)

        r,c,obj,time = mvq.popleft()
        if time > R * C:
            break
        for idx in range(4):
            n_i = r + di[idx]
            n_j = c + dj[idx]

            # 다음칸이 범위 바깥일 때 이동불가
            if n_i < 0 or n_j <= 0 or n_i >= R or n_j >= C or visited[n_i][n_j] == True: continue
        
            # 다음 칸에 돌 있을 때 이동 불가 
            if graph[n_i][n_j] == 'X': continue

            next_watters = []
            if obj =='*':
                if graph[n_i][n_j] == 'D':
                    continue

                # 다음 칸 next_watters 에 넣기 
                graph[n_i][n_j] = '*'
                next_watters.append((n_i, n_j))
                mvq.append((n_i, n_j, '*', time + 1))

            elif obj =='S':
                if graph[n_i][n_j] == 'D':
                    time += 1
                    return

                if graph[n_i][n_j] == '*':
                    continue
                
                next_safe = True
                for x,y in next_watters:
                    if x == n_i and y == n_j:
                        next_safe = False
                        break
                if not next_safe:
                    continue
                
                graph[r][c] = '.'  
                graph[n_i][n_j] = 'S'
                mvq.append((n_i, n_j, 'S', time + 1))
                    
    print("KAKTUS")
    return

R,C = map(int, input().split())

graph = []
for r in range(R):
    graph.append([])
    graph[r] = list(input().rstrip())

time = 0
visited = [[False] * C for _ in range(R)]
BFS()
