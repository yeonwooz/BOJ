#started at 6:05
import sys
from collections import deque
input = sys.stdin.readline

def BFS(start):
    q = deque()
    q.append((start, 0))
    visited[start] = True
    costs[start] = 0
    # total = 0
    while q:
        v, cur_cost = q.popleft()
        print('v', v,'cur_cost', cur_cost)
        for to, cost in arr[v]:
            print('to', to, 'cost', cost)
            if visited[to] == False:
                visited[to] = True
                q.append((to, cost))
                costs[to] = costs[v] + cost
                print(costs)


N = int(input())
M = int(input())
arr = [[] * (N+1) for _ in range(N+1)]
costs = [0] * (N+1)

for _ in range(3, M+3):
    fr, to, cost = map(int, input().split())
    arr[fr].append((to, cost))

start, end = map(int, input().split())

visited = [False] * (N+1)
BFS(start)