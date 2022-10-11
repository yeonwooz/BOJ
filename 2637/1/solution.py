#started at 12:59
# https://velog.io/@qweadzs/BOJ-2637-%EC%9E%A5%EB%82%9C%EA%B0%90-%EC%A1%B0%EB%A6%BDPython
import sys
from collections import deque

# 질문 : 아예 안 쓰이는 부품은 없는지??

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

inDegree = [0] * (N+1)
graph = [[] for _ in range(N+1)]
needs  = [[0] * (N+1) for _ in range(N+1)]
answer = [0] * (N+1)
total_cnt = 0

for _ in range(M):
    x,y,k =  map(int, sys.stdin.readline().split())
    graph[y].append({'dest':x, 'cnt':k})
    # y를 k개 사용해서 x를 만들었다 
    # graph[y].append(x)
    inDegree[x] += 1

q = deque()
for i in range(1, len(inDegree)):
    if inDegree[i] == 0:
        q.append(i)

while q:
    v = q.popleft()

    for obj in graph[v]:
        dest = obj['dest']
        cnt = obj['cnt']

        if needs[v].count(0) == N+1:
            needs[dest][v] += cnt
        else:
            for i in range(1, N+1):
                needs[dest][i] += needs[v][i] * cnt
        
        inDegree[dest] -= 1        
        if inDegree[dest] == 0:
            q.append(dest)

        # # v를 cnt 개 사용해서 dest 를 만든다 
        # # v -> dest 연결관계 끊기
        # answer[v] += cnt  #v 부품은 cnt 개 만큼 사용되었다 
        # inDegree[dest] -= cnt

for x in enumerate(needs[N]):
    if x[1] > 0:
        print(*x)
# print(needs)