#started at 2:33
# https://steadily-worked.tistory.com/646
# import sys
# from collections import deque
# input = sys.stdin.readline

# def BFS(v):
#     global K
#     answer = []
#     q = deque()
#     q.append(v)
#     visited[v] = True
#     distance[v] = K

#     while q:
#         now = q.popleft()

#         for i in graph[now]:
#             if not visited[i]:
#                 visited[i] = True
#                 q.append(i)
#                 distance[i] = distance[now] - 1 # 이전 점을 기준으로 누적
#                 if distance[i] == 0:
#                     answer.append(i)
#     if len(answer) == 0:
#         print(-1)
#     else:
#         answer.sort()
#         for i in answer:
#             print(i, end='\n')

# N,M,K,X = map(int, input().split())
# graph = [[] * M for _ in range(N+1)]

# distance = [0] * (N+1)
# visited = [False] * (N+1)
# for _ in range(M):
#     a,b = map(int, input().split()) # a -> b 단방향 
#     graph[a].append(b)

# BFS(X)

# if len(answer) == 0:
#     print(-1)
# else:
#     answer.sort()
#     # print(">>>", answer)
#     print("\n".join(str(s) for s in answer))
# # finished at 2:59 => 틀림

### 다익스트라 

import sys, heapq
f = sys.stdin.readline
INF = 1e9

N,M,K,X = map(int, f().split())
graph = [[] for _ in range(N+1)]
costs = [INF] * (N+1)  # 각 정점까지의 비용. 어떤 점에서 이 점까지 가는 비용이 기존 비용보다 작으면 갱신된다

for _ in range(M):
    a, b = map(int, f().split())
    graph[a].append((b,1))  

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start)) # 최소힙에 비용과 도착지점 넣어줌. 가장 첫 점은 비용 없음
    costs[start] = 0
    while q:
        cost, pos = heapq.heappop(q)

        if costs[pos] < cost: # costs 리스트 상에서 이 인덱스에 해당하는 비용이 이미 작으면 스킵
            continue
        
        for j in graph[pos]:
            new_cost =  cost + j[1]    
            if new_cost < costs[j[0]]:  # costs 리스트 상에서 이 인덱스에 해당하는 비용보다 더 작은 비용을 발견했다면 교체. 
                costs[j[0]] = new_cost
                heapq.heappush(q,(new_cost,j[0]))

dijkstra(X)
answer = []
for i in range(1, N+1):
    if costs[i] == K:
        answer.append(i)

if len(answer) == 0:
    print(-1)
else:
    print("\n".join(str(s) for s in answer))

