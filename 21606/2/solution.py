#started at 5:11
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**9)

N = int(input())

s =  "0" + input().strip()
graph = [[] for _ in range(N+1)]

sum = 0    
for i in range(3, N+2):
    u,v =  map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
    if s[u] == '1' and s[v] == '1': # 실내 -> 실내는 방향 바꿔도 가능
        sum += 2

def DFS(v, cnt):
    visited[v] = True
    for dot in graph[v]:
        if s[dot] == '1':
            cnt += 1    # 실외를 기준으로 인접 실내가 몇개인지 n을 구하려고 하는 것이니까 인접 실내를 만날 때마다 +1 해주어야 함
        elif not visited[dot] and s[dot] == '0':
            cnt = DFS(dot, cnt)  # cnt는 DFS 탐색으로 교체 후 리턴
    return cnt
            
visited = [False] * (N+1)
for i in range(1, N+1):
    cnt = 0
    if not visited[i] and s[i] == '0': # 실외를 기준으로 인접 탐색 시작. 
        n = DFS(i, cnt)
        sum += n * (n-1) # 방문하지 않은 실외들을 기준으로 인접점들을 dfs 탐색 시켜서 그 결과를 더해준다. 만약 그 인접점들이 모두 실내라면 그 개수만큼 더해주고, 실외라면 DFS결과를 받아온다 
print(sum)