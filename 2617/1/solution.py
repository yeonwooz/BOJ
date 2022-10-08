import sys, heapq
input = sys.stdin.readline

def DFS(v):
    for heavy in graph[v]:
        if heavy not in visited:
            visited.append(heavy)
            DFS(heavy)

N,M = map(int, sys.stdin.readline().split())
# print(N,M)

graph = [[] * M for _ in range(N+1)] # 일방향 연결트리
visited = []

for i in range(M):
    heavy, light = map(int, sys.stdin.readline().split())
    graph[light].append(heavy)

for i in range(1, N+1):
    DFS(i)

answer = N - (len(visited)) 
print(answer)