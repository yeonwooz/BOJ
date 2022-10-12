import sys
from collections import deque

N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)] # 인접행렬 그래프
inDegree = [0] * (N+1)
connections = [[] for _ in range(N+1)]  # 각 출발 노드에서 연결된 목적 노드들
answer = [0] * (N+1)
for i in range(1, N+1):
    row = list(map(int, list("0" + sys.stdin.readline().rstrip())))
    graph[i] = row

    for j in range(1, N+1):
        if graph[i][j] == 1:
            connections[i].append(j)
            inDegree[j] += 1

def top_sort():
    q = deque()
    for i in range(1,N+1):
        if inDegree[i] == 0:
            q.append(i)

    order = 1
    while q:
        popped = q.popleft()
        answer[popped] = order
        '''
        1. 예를 들어 [[], [5], [4], [], [5], [3]] 이렇게 생긴 connections 기준으로, 진입차수가 0인 것은 1,2 (아무도 1,2를 안 가리킴)
       
        2. 1부터 시작하는 for문에서 1을 가리키는 게 없어서 가장 먼저 1 출력, 1->5 연결관계 끊고 5를 q에 넣음
       
        3. 1->5 연결관계가 끊겼지만 여전히 4가 5를 가리키고 있어서 5의 진입차수는 아직 1이므로 출력보류
        
        4. 2 출력, 1->4 연결관계를 끊어서 4의 진입차수가 0이 되어 4를 q에 넣음
        
        5. 4 출력, 4->5 연결관계를 끊어서 5의 진입차수가 0이 되어 5를 q에 넣음

        6. 5 출력, 5->3 연결관계를 끊어서 3의 진입차수가 0이 되어 3을 q에 넣음

        7. 3 출력. 3이 가리키는 노드는 없다. 함수 종료
        
        '''
        for i in connections[popped]:
            inDegree[i] -= 1
            if inDegree[i] == 0:
                q.append(i)
        order += 1

top_sort()
print(answer)