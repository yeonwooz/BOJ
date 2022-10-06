#started at 10:50
import sys
from collections import deque

def BFS(v):
    global answer, N, arr
    visited = [v]
    queue = deque()
    queue.append(v)

    while queue:
        cur = queue.popleft()
        visited.append(cur)

        for i in range(len(arr[cur])):
            next = arr[cur][i]
            if next not in visited:
                visited.append(next)
                answer[next] = cur
                queue.append(next)

N = int(sys.stdin.readline())
arr = [[] * (N+1) for _ in range(N+1)]
answer = [0]*(N+1)

for i in range(N-1):
    fr, to = map(int, sys.stdin.readline().split())
    if arr[fr]:
        arr[fr].append(to)
    else:
        arr[fr] = [to]

    if arr[to]:
        arr[to].append(fr)
    else:
        arr[to] = [fr]
BFS(1)

print("\n".join(str(answer[i]) for i in range(2, len(answer))))