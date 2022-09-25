import sys

N = int(sys.stdin.readline())
matrix = sys.stdin.readlines()
for i in range(len(matrix)):
    matrix[i] = list(map(int, matrix[i].rstrip().split()))

min_cost = 1000000 * N + 1
cur_cost = 0
start = 0
visited = [False] * N
visited[0] = True

def travel(depth, cur, cur_cost):
    global min_cost
    global start

    if depth == N:
        if matrix[cur][start]:
            cur_cost += matrix[cur][start]
            min_cost = min(min_cost, cur_cost)
        return

    for next in range(N):
        if matrix[cur][next]:
            if visited[next] == False:
                cur_cost += matrix[cur][next]
                visited[next] = True
                travel(depth + 1, next, cur_cost)
                visited[next] = False
                cur_cost -= matrix[cur][next]


travel(1, start, cur_cost)
# 최적경로 사이클을 찾는 것이기 때문에, 모든 정점 탐색할 필요 없이 아무 정점에서나 시작해도 된다. 어느 정점에서 시작하든 최적 사이클은 똑같다.

print(min_cost)