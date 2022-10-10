import sys
sys.setrecursionlimit(10**6)
N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)]

for _ in range(N-1):
    a,b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

def DFS(v):
    visited[v] = 1
    for i in graph[v]:
        if not visited[i]:
            answer[i] = v
            DFS(i)

answer = [0 for _ in range(N+1)]
visited = [0 for _ in range(N+1)]

DFS(1)
print("\n".join(str(answer[i]) for i in range(2, len(answer))))