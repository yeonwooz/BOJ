#started at 2:33
import sys
from collections import deque
input = sys.stdin.readline

def BFS(v):
    answer = []
    q = deque()
    q.append(v)
    visited[v] = True
    distance[v] = 0

    while q:
        now = q.popleft()

        for i in graph[now]:
            if not visited[i]:
                visited[i] = True
                q.append(i)
                distance[i] = distance[now] + 1
                if distance[i] == K:
                    answer.append(i)
    if len(answer) == 0:
        print(-1)
    else:
        answer.sort()
        for i in answer:
            print(i, end='\n')

N,M,K,X = map(int, input().split())
graph = [[] * M for _ in range(N+1)]

distance = [0] * (N+1)
visited = [False] * (N+1)
for _ in range(M):
    a,b = map(int, input().split()) # a -> b 단방향 
    graph[a].append(b)

BFS(X)

# if len(answer) == 0:
#     print(-1)
# else:
#     answer.sort()
#     # print(">>>", answer)
#     print("\n".join(str(s) for s in answer))
# # finished at 2:59 => 틀림


### 다익스트라 