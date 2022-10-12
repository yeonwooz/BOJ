# https://hiruby.tistory.com/439
#started at 1:33
#1948 임계경로
import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[] * (n+1) for _ in range(n+1)] # 노드 간 연결관계
back_graph = [[] * (n+1) for _ in range(n+1)] # ***역그래프
inDegree = [0] * (n+1) # 진입차수
times = [0] * (n+1) # 각각의 경로 별로 노드에 도착하기까지 걸린 최대시간 
visited = [0] * (n+1) # 방문한 노드 체크

q =  deque() # 큐를 전역적으로 관리하겠다

for i in range(3, m+3):
    a,b,t = map(int, input().split())
    graph[a].append((b,t))
    back_graph[b].append((a,t))
    # times[a][b] = c
    inDegree[b] += 1

start, end = map(int, input().split())

q.append(start) # q에 시작점을 담고 여행 시작. q에는 오로지 노드의 번호만 담고, 부가정보는 그래프에서 확인한다

### 위상정렬함수
def top_sort():
    while q:
        cur = q.popleft() # 이번 노드
        # print(cur)
        for i, t in graph[cur]: # 이번 노드에서 갈 수 있는 목적지 노드들 순회
            # print(i,t)
            inDegree[i] -= 1  # 목적지노드 i 진입차수 1제거
            times[i] = max(times[i], times[cur] + t) # 목적지노드 i 에 도달하는 최대시간 갱신
            if inDegree[i] == 0:
                q.append(i)

    '''
    경로별 최대시간이 times에 기록되었고, 모든 진입차수가 제거되었다.
    임계경로를 구하기 위해 역추적해보자
    '''            

    # 백트래킹
    cnt = 0  # 임계경로(최장경로)에 속한 정점개수를 end부터 거꾸로 카운트
    q.append(end) 
    while q:
        cur = q.popleft()
        for i,t in back_graph[cur]: # 역그래프에는 도착지 기준으로 그 직전에 얼마가 걸려서 왔는지 기록되어있다
            if times[cur] - times[i] == t: #현재노드의 최장시간과 이 직전 노드의 최장시간이 간선비용과 같다면, i는 임계경로에 포함된 노드이다(cur까지 오는 동안 i를 거쳐서왔다)
                cnt += 1
                if visited[i] == 0: # 큐에는 한번만 담는다
                    q.append(i)
                    visited[i] = 1
    
    print(times[end])
    print(cnt)

top_sort()

# DFS, BFS는 풀이는 어렵지만 스스로 짜는 것은 쉬운데,
# 위상정렬은 풀이를 보면 이해가 직관적인데 스스로 짜는 것이 어려운 것 같다.