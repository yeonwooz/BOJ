#started at 2:33
import sys
from collections import deque
input = sys.stdin.readline

def BFS(v, K):
    q = deque()
    q.append(v)
    visited.append(v)
    while q:
        has_child = False
        dot1 = q.popleft()
        if K == 0:
            break

        for dot2 in graph[dot1]:
            if dot2 not in visited:
                visited.append(dot2)
                q.append(dot2)
                has_child = True
                if K == 1:
                    answer.append(dot2)

        if has_child:
            K -= 1  # 현재 정점의 연결된 점들을 모두 queue에 넣었으니 K를 1 줄이고 트리의 하위 레벨로 이동

N,M,K,X = map(int, input().split())
graph = [[] * M for _ in range(N+1)]
answer = []

visited = []
for _ in range(M):
    a,b = map(int, input().split()) # a -> b 단방향 
    graph[a].append(b)

BFS(X, K)

if len(answer) == 0:
    print(-1)
else:
    answer.sort()
    # print(">>>", answer)
    print("\n".join(str(s) for s in answer))
# finished at 2:59 => 틀림