#started at 10:50
import sys
from collections import deque

def BFS():
    global answer, N, arr
    queue = deque()
    queue.append(1)

    while queue:
        cur = queue.popleft()

        for node in arr[cur]:
            if answer[node] == 0:
                answer[node] = cur
                queue.append(node)

N = int(sys.stdin.readline())
arr = [[] for _ in range(N+1)]
answer = [0]*(N+1)

for i in range(N-1):
    fr, to = map(int, sys.stdin.readline().split())
    arr[fr].append(to)
    arr[to].append(fr)
BFS()

print("\n".join(str(answer[i]) for i in range(2, len(answer))))