import sys

N = int(sys.stdin.readline())
matrix = [list(map(int,sys.stdin.readline().split())) for i in range(N)]

visited = [False for _ in range(N)]

min_cost = sys.maxsize

def recur(start, cur, cost):
    global matrix, visited, min_cost
    
    if start == cur and visited.count(False) == 0:
        min_cost = min(min_cost, cost)
        return 

    for i in range(N) :
        if not matrix[cur][i] == 0 and not visited[i]:
            visited[i] = True
            recur(start, i, cost + matrix[cur][i])
            visited[i] = False

recur(0, 0, 0)
print(min_cost)