#started at 2:27
import sys

def DFS(v, visited):
    global N, cnt
    visited.append(v)
    for dot in arr[v]:
        if v != dot and dot not in visited:
            visited.append(dot)
            cnt += 1
            DFS(dot, visited)
            # visited.pop()  # ==> 이부분 확실히 해야함. for문 탐색으로 다음 인덱스에서 이동할때도 앞 인덱스에서 방문한 visited 유지되어야 함


N = int(sys.stdin.readline())
arr = [[] * (N+1) for _ in range(N+1)]

M = int(sys.stdin.readline())

for _ in range(M):
    u,v = map(int,sys.stdin.readline().split())
    arr[u].append(v)
    arr[v].append(u)

cnt = 0
visited = []
DFS(1, visited)
print(cnt)