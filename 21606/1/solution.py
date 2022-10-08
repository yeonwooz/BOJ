#started at 5:02
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

def DFS(v):    # 인접한 정점 탐색하는 재귀 함수
    local_cnt = 0
    global A

    for dot in arr[v]:
        if A[dot] == 1:             # 다음 점이 실내라면 local_cnt + 1
            local_cnt += 1
        else:                       # 다음 점이 실외이고 방문한 적 없다면, 재귀 한번 더 탐색 후 local_cnt 에 합산 
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
    if A[start] == 0:               # 시작점이 실외일 때,
        if start not in visited:    # 방문한 적 없는 곳이면 
            visited.add(start) 
            tmp = DFS(start)        # 계속 이동
            cnt += tmp * (tmp - 1)  # 인접 경로를 탐색하는 재귀 끝난 후 구해진 tmp 중 두개 뽑는 경우의 수를 계산
    else:                           # 시작점이 실내일 떄
        for end in arr[start]:     
            if A[end] == 1:         # 다음 방문지점이 실내라면, 경우의 수 하나를 더한다 
                cnt += 1
print(cnt)