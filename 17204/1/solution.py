#started at 3:16
import sys
input = sys.stdin.readline

N,K = map(int, input().split())
# N부터 K까지 도달하는 최단거리

graph = [0] * N
visited = [0] * N
for i in range(N):
    a = int(input())
    graph[i] = a

cnt = 0
p = 0
while True:
    if p == K:
        print(cnt)
        break
    if cnt == N:
        print(-1)
        break

    p = graph[p]
    cnt += 1