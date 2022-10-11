#started at 12:59
# https://velog.io/@qweadzs/BOJ-2637-%EC%9E%A5%EB%82%9C%EA%B0%90-%EC%A1%B0%EB%A6%BDPython
import sys
from collections import deque

# 질문 : 아예 안 쓰이는 부품은 없는지??

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

inDegree = [0] * (N+1)
graph = [[] for _ in range(N+1)]
needs  = [[0] * (N+1) for _ in range(N+1)]
answer = [0] * (N+1)
total_cnt = 0

for _ in range(M):
    x,y,k =  map(int, sys.stdin.readline().split())
    graph[y].append({'dest':x, 'cnt':k})
    # y를 k개 사용해서 x를 만들었다 
    # graph[y].append(x)
    inDegree[x] += 1

q = deque()
for i in range(1, len(inDegree)):
    if inDegree[i] == 0:
        q.append(i)

while q:
    v = q.popleft()

    for obj in graph[v]:
        #cnt개의 v로 dest 만듦
        dest = obj['dest']
        cnt = obj['cnt']

        if needs[v].count(0) == N+1:
            needs[dest][v] += cnt
        else:
            for i in range(1, N+1):
                # i로 만들 수 있는 노드들을 탐색해보자 
                needs[dest][i] += needs[v][i] * cnt
                #i로 dest를 만드는 것은 
                #i로 v를 만들되,  cnt개가 필요하다.

        inDegree[dest] -= 1        
        if inDegree[dest] == 0:
            q.append(dest)

        # # v를 cnt 개 사용해서 dest 를 만든다 
        # # v -> dest 연결관계 끊기
        # answer[v] += cnt  #v 부품은 cnt 개 만큼 사용되었다 
        # inDegree[dest] -= cnt

# print(needs[N])
for arr in enumerate(needs[N]):
    # print(arr) # (인덱스 = 부품 번호,  개수 )
    # N을 만들기 위한 수단들 배열
    # print(arr)
    if arr[1] > 0:
        print(*arr)   # 부품개수 0보다 크면 부품 번호와 함께 출력
# print(needs)