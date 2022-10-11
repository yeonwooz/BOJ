import sys
N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)]


connections = [[] for _ in range(N+1)]  # 각 출발 노드에서 연결된 목적 노드들

for i in range(1, N+1):
    row = list(map(int, list("0" + sys.stdin.readline().rstrip())))
    graph[i] = row

    for j in range(1, N+1):
        if graph[i][j] == 1:
            connections[i].append(j)

print(connections)
        
        

