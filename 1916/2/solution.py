#started at 6:05
import sys, heapq
from collections import deque
input = sys.stdin.readline

def BFS(start):
    q = []
    heapq.heappush(q, (0, start))
    costs[start] = 0

    while q:
        v, cur_cost = heapq.heappop(q)

        print(new_cost)
        if costs[v] < cur_cost:
            continue
        
        for to, cost in arr[v]:
            new_cost = cur_cost + cost
            if new_cost < costs[to]:
                costs[to] = new_cost
                heapq.heappush(q(new_cost, to))

N = int(input())
M = int(input())
arr = [[] * (N+1) for _ in range(N+1)]
costs = [int(1e9)] * (N+1)

for _ in range(3, M+3):
    fr, to, cost = map(int, input().split())
    arr[fr].append((to, cost))

start, end = map(int, input().split())

visited = [False] * (N+1)
BFS(start)