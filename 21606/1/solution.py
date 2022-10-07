#started at 5:02
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

def DFS(v, visited):
    # print("visited", v)
    global A, cnt
    in_or_out = A[v]
    visited[v] = in_or_out  # 해당 점이 실내인지 실외인지 기록

    for dot in arr[v]:
        if v != dot and visited[dot] == False:
            visited[dot] = in_or_out
            if A[dot] == 1: #실내라서 산책 종료
                # print("fin dot", dot)
                cnt += 1
            else: 
                DFS(dot, visited)
                visited[dot] = False

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
        DFS(start, visited)
    else:
        # print('start', start, )
        # 시작점이 실내라면 실내로 가는 개수만 확인해서 *2해서 cnt에 더해주기
        for end in range(1, N+1):
            if start != end and end in arr[start] and A[end] == 1:
                # print('end', end)
                iti_cnt += 1
        # cnt += iti_cnt * 2

# print('iti_cnt', iti_cnt)

print(cnt * (cnt - 1) + iti_cnt)