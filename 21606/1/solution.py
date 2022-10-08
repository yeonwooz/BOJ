#started at 5:02
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

def DFS(v, visited):
    local_cnt = 0
    # print("visited", v)
    global A
    in_or_out = A[v]
    visited[v] = in_or_out  # 해당 점이 실내인지 실외인지 기록

    for dot in arr[v]:
        if v != dot and visited[dot] == False:
            visited[dot] = in_or_out
            if A[dot] == 1: #실내라서 산책 종료
                # print("fin dot", dot)
                local_cnt += 1
            else: 
                local_cnt += DFS(dot, visited)
                visited[dot] = False
    return local_cnt
    
N = int(input())
A = [0] + list(map(int, list(input().rstrip())))

arr = [[] for _ in range(N+1)]

for _ in range(N - 1):
    u,v = map(int, input().split())
    # arr[u].append((v, A[v])) # 정점번호, 실내/실외(1/0) 
    # arr[v].append((u, A[u]))
    arr[u].append(v)
    arr[v].append(u)

cnt = 0
iti_cnt = 0
for start in range(1, N+1):
    visited = [False] * (N+1)
    if A[start] == 0: 
        # 시작점이 실외일 때만 DFS 시작
        tmp = DFS(start, visited)
        cnt += tmp * (tmp - 1)
    else:
        # print('start', start, )
        # 시작점이 실내라면 실내로 가는 개수만 확인해서 *2해서 cnt에 더해주기
        for end in range(1, N+1):
            if start != end and end in arr[start] and A[end] == 1:
                # print('end', end)
                cnt += 1

print(cnt)