'''
started at 10:51
2252 줄 세우기 

* 위상정렬 : 진입숫자가 작은것부터 q에 담고, q.popleft()하면서 간선을 제거해나간다
'''
import sys, heapq
from collections import deque

N,M = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(N+1)] # i번째 학생보다 작은 학생 수 (i로 진입할 수 있는 수)
answer = []
for _ in range(M):
    A,B = map(int, sys.stdin.readline().split())
    # A<B
    graph[B].append(A)

def top_sort():
    q = []
    for i in range(1, N+1):
        heapq.heappush(q, ((len(graph[i])), i) )

    while q:
        connection, v = heapq.heappop(q)
        answer.append(v)
        if len(graph[v]):
            graph[v] = []

top_sort()
print(*answer)