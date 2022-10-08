#started at 5:02
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

def DFS(v):
    local_cnt = 0
    global A

    for dot in arr[v]:
        if A[dot] == 1:
            local_cnt += 1
        else:
            if dot not in visited:
                visited.add(dot)
                local_cnt += DFS(dot)
    return local_cnt
    
N = int(input())
A = list(map(int, list("0" + input().rstrip())))

arr = [[] for _ in range(N+1)]

for _ in range(N - 1):
    u,v = map(int, input().split())
    # arr[u].append((v, A[v])) # 정점번호, 실내/실외(1/0) 
    # arr[v].append((u, A[u]))
    arr[u].append(v)
    arr[v].append(u)

cnt = 0
visited = set()
iti_cnt = 0

for start in range(1, N+1):
    if A[start] == 0: 
        if start not in visited:
            visited.add(start)
            tmp = DFS(start)
            cnt += tmp * (tmp - 1)
    else:
        for end in arr[start]:
            if A[end] == 1:
                cnt += 1
print(cnt)