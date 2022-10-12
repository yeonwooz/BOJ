#started at 9:39
import sys
from collections import deque
N = int(sys.stdin.readline())

costs = [10**6] * (N+1)
costs[N] = 0

cnt = 0
q = deque()
q.append((N,0))

while q:
    ptr, cost = q.popleft()
    # ptr = N  # 1이 되는 게 목표
    if ptr == 1:
        print(cost)
        break

    if ptr % 3 == 0 and costs[int(ptr / 3)] > cost + 1 :
        q.append((int(ptr / 3), cost + 1))
        costs[int(ptr / 3)] = cost + 1

    if ptr % 2 == 0 and costs[int(ptr / 2)] > cost + 1 :
        q.append((int(ptr / 2), cost + 1))
        costs[int(ptr / 1)] = cost + 1
    
    if costs[ptr - 1] > cost + 1 :
        q.append((ptr - 1, cost + 1))
        costs[ptr - 1] = cost + 1