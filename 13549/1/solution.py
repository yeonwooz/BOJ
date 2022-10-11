#started at 3:12
# https://pottatt0.tistory.com/entry/%EB%B0%B1%EC%A4%80-13549-python-%EC%88%A8%EB%B0%94%EA%BC%AD%EC%A7%88-3
import sys, heapq
input = sys.stdin.readline
INF = 2147000000
MAX = 100001
N,K = map(int, input().split())

costs = [INF] * MAX
costs[N] = 0
# 음수면..?
# for i in range(min(N,K), max(N,K) + 1):
#     costs[i]

def dijkstra(n):
    q = [] #이동할 큐
    # q.append((n,0)) # 방문지점과 비용
    heapq.heappush(q,(0,n)) # 방문지점과 비용

    while q:
        cost, pos = heapq.heappop(q)
        
        for c, p in [(1, pos + 1), (1, pos - 1),(0, pos * 2)]:
            if 0 <= p < MAX and costs[p] > cost + c:
                costs[p] = cost + c
                heapq.heappush(q, (costs[p], p))
    print(costs[K])    
dijkstra(N)
#finished at 3:45 => 틀림