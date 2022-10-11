'''
started at 10:51
2252 줄 세우기 

* 위상정렬 : 진입숫자가 작은것부터 q에 담고, q.popleft()하면서 간선을 제거해나간다
'''
import sys
from collections import deque

N,M = map(int, sys.stdin.readline().split())
inDegree = [0] * (N+1)
graph = [[] for _ in range(N+1)] # i번째 학생보다 작은 학생 수 (i로 진입할 수 있는 수)
answer = []
for _ in range(M):
    A,B = map(int, sys.stdin.readline().split())
    # A<B
    # graph[B].append(A)
    graph[A].append(B)
    inDegree[B] += 1 # 두번째 인자로 들어온 B 학생의 키보다 작은 학생이 하나 더 늘었다

def top_sort():
    q = deque()
    for i in range(1, N+1):
        # heapq.heappush(q, ((len(graph[i])), i) )
        if inDegree[i] == 0:
            q.append(i) # 진입차수가 0인 학생들은 q에 추가한 후 제거 예정

    while q:
        h = q.popleft()
        answer.append(h)
        for i in graph[h]:
            # tmp보다 큰 학생들에 대해
            inDegree[i] -= 1 # 더 작은 학생이 하나 빠졌다
            if inDegree[i] == 0:
                # 해당 학생의 진입차수가 0이되면
                q.append(i)
                # 진입차수가 0이 된 학생은 q에 추가한 후 제거 예정

top_sort()
print(*answer)