from itertools import count
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10** 9)

def DFS(ext):
    global count
    cnt = 0
    for nb in graph[ext]:
        if arr[nb] == 1:
            cnt += 1
        else:
            if nb not in visited:
                visited.add(nb)
                cnt += DFS(nb)
    return cnt

n = int(input())
arr = list(map(int, list("0" + input().rstrip()))) #1번인덱스부터 사용

graph =[[] for _ in range(n+1)]

for _ in range(1, n):
    u,v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

cnt = 0
visited = set()  #방문한 지점들을 집합으로 관리

for i in range(1, n+1):
    if arr[i] == 1: # 실내일 때
        for j in graph[i]: # 이 실내랑 연결된 점들에 대해
            if arr[j] == 1: # 실내일 때
                cnt += 1
    else: # 실외일 때
        if i not in visited:
            visited.add(i)
            tmp = DFS(i)
            cnt += tmp * (tmp - 1)

print(cnt)