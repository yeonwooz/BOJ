import sys

global min_costs
min_costs = 1000001

def recur(N, matrix, visited, v, cur_cost):
    global min_costs
    if len(visited) == N:
        cur_cost += matrix[v][visited[0]]
        if min_costs > cur_cost:
            min_costs = cur_cost
        return

    for j in range(len(matrix[v])) :
        if v != j and j not in visited:
            visited.append(j)
            cur_cost += matrix[v][j]
            recur(N, matrix, visited, j, cur_cost)
            visited.pop()

N = int(sys.stdin.readline())
matrix = []
for i in range(N):
    matrix.append(list(map(int, sys.stdin.readline().split())))

for i in range(N):
    visited = [i]
    for j in range(N) :
        if i != j and j not in visited:
            visited.append(j)
            recur(N, matrix, visited, j, matrix[i][j])
            visited.pop()

print(min_costs)