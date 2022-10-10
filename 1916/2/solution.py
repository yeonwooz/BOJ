#started at 6:05
import sys, heapq
from collections import deque
input = sys.stdin.readline

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start)) # 최소힙에 비용과 도착지점 넣어줌. 가장 첫 점은 비용 없음
    costs[start] = 0

    while q:
        cur_cost, v = heapq.heappop(q)

        if costs[v] < cur_cost: # costs 리스트 상에서 이 인덱스에 해당하는 비용이 이미 작으면 스킵
            continue

        for cost, to in arr[v]:
            new_cost = cur_cost + cost
            if costs[to] > new_cost: # costs 리스트 상에서 이 인덱스에 해당하는 비용보다 더 작은 비용을 발견했다면 교체. 
                heapq.heappush(q, (new_cost, to))
                costs[to] = new_cost

N = int(input())
M = int(input())
arr = [[] * (N+1) for _ in range(N+1)]
costs = [int(1e9)] * (N+1)

for _ in range(3, M+3):
    a, b, c = map(int, input().split())
    arr[a].append((c,b))

start, end = map(int, input().split())

dijkstra(start)
print(costs[end])