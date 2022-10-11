#started at 3:12
import sys, heapq
input = sys.stdin.readline
from collections import deque

dwalk = [+1, -1] #1초 후
dtel = 2 # 0초 후(즉시)

N,K = map(int, input().split())

costs = [1e9] * (max(N,K) + 1)
# for i in range(min(N,K), max(N,K) + 1):
#     costs[i]

should_print = True
def dijkstra(n):
    global should_print
    q = [] #이동할 큐
    # q.append((n,0)) # 방문지점과 비용
    heapq.heappush(q,(0,n)) # 방문지점과 비용

    while q:
        cost, pos = heapq.heappop(q)
        tele_pos = pos * dtel

        if pos == K or tele_pos == K:
            print(cost)
            should_print = False
            break
        
        range_s =  min(N,K)
        range_e =  max(N,K)
        for i in range(2):
            n_pos1 = pos + dwalk[i] # 바로 갈 경우
            n_pos2 = pos * 2 + dwalk[i] # 순간이동 후 이동

            if range_s <= n_pos1 <= range_e:
                if costs[n_pos1] > cost + 1:
                    costs[n_pos1] = cost + 1
                    heapq.heappush(q,(cost + 1, n_pos1)) 

            if range_s <= n_pos2 <= range_e:
                if costs[n_pos2] > cost + 1:
                    costs[n_pos2] = cost + 1
                    heapq.heappush(q,(cost + 1, n_pos2)) 

dijkstra(N)
if should_print:
    print(costs[K])
#finished at 3:45 => 틀림