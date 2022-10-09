# 데이크스트라 : BFS 탐색에서 하위노드를 queue에 넣을 때 ,
# 비용그래프에 기록된 하위노드의 비용(기본 1e9부터 계속 갱신됨)보다 방금  pop한 노드의 누적비용에 하위노드의 비용을 더한 값 'X'가 더 작다면,
# 비용그래프에서 그 하위 노드로 가는 비용을 'X'로 교체해주고 현재 탐색중인 queue에도 이 목적지의 비용으로 X를  넣어준다.

#started at 8:33
#2665 미로만들기
import sys, heapq
input = sys.stdin.readline
from collections import deque

def dijkstra(s_i, s_j):
    q = []
    visited[s_i][s_j] = 1
    heapq.heappush(q, (0, (s_i, s_j)))  # 0이라는 비용으로 i,j포지션 을 push

    while q:
        di = [-1,1,0,0]
        dj = [0,0,-1,1]

        cost, (i,j) = heapq.heappop(q)
        if i == n-1 and j == n-1:
            print(cost)
    
        for idx in range(4):
            n_i = i + di[idx]
            n_j = j + dj[idx]
            
            if 0 <= n_i < n and 0 <= n_j < n and visited[n_i][n_j] == 0:
                visited[n_i][n_j] = 1
                if graph[n_i][n_j] == 1:
                    # 다음 칸이 흰방
                    heapq.heappush(q, (cost, (n_i, n_j)))  # 같은 비용으로 i,j포지션 을 push
                else:
                    # 다음 칸이 검은 방
                    heapq.heappush(q, (cost + 1, (n_i, n_j)))  # 1 더 큰 비용으로 i,j포지션 을 push

n = int(input())

graph = []
visited = [[0] * n for _ in range(n)]
for i in range(n):
    row = list(map(int, list(input().rstrip())))
    graph.append(row)

dijkstra(0,0)