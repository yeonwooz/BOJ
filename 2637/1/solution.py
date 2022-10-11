#started at 12:59
import sys
from collections import deque

# 질문 : 아예 안 쓰이는 부품은 없는지??

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

inDegree = [0] * (N+1)
graph = [[] for _ in range(N+1)]
answer = [0] * (N+1)
total_cnt = 0

for _ in range(M):
    x,y,k =  map(int, sys.stdin.readline().split())
    graph[y].append({'dest':x, 'cnt':k})
    # y를 k개 사용해서 x를 만들었다 
    # graph[y].append(x)
    inDegree[x] += k

q = deque()
for i in range(1, len(inDegree)):
    if inDegree[i] == 0:
        q.append(i)


while q:
    v = q.popleft()

    for obj in graph[v]:
        dest = obj['dest']
        cnt = obj['cnt']
        # v를 cnt 개 사용해서 dest 를 만든다 
        # v -> dest 연결관계 끊기
        answer[v] += cnt  #v 부품은 cnt 개 만큼 사용되었다 
        inDegree[dest] -= cnt

        if inDegree[dest] == 0:
            q.append(dest)

print(answer)