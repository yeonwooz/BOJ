#started at 2:00
import sys
#연결요소 : 모든 정점들이 연결된 하위 그래프 
sys.setrecursionlimit(10**4) #  파이썬 깊이는 10 ** 3뎁스까지가 기본설정이다
def DFS(v, visited):
    global N
    visited.append(v)
    for node in arr[v]:
        if v != node and node not in visited:
            visited.append(node)
            DFS(node, visited)
            # visited.pop()
    
N,M = map(int, sys.stdin.readline().split())

arr = [[] * (N+1) for _ in range(N+1)]

for _ in range(M):
    u,v = map(int, sys.stdin.readline().split())
    arr[u].append(v) # u 에서 연결된 v들
    arr[v].append(u) # v 에서 연결된 u들


cnt = 0

visited = []
for i in range(1, N+1):
    if i not in visited:
        cnt += 1
        DFS(i, visited)

print(cnt)
