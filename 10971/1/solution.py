import sys

global min_costs
min_costs = 0

def recur(lines, visited, v):
    if len(visited) == len(lines):
        print(visited)
        return
    for idx in range(N):
        if v != idx and idx not in visited:
            visited.append(idx)
            recur(lines, visited, idx)
            visited.pop()


N = int(sys.stdin.readline())
matrix = []
for i in range(N):
    matrix.append(list(map(int, sys.stdin.readline().split())))

# recur(N, matrix, visited, 0, 0, 0)
for i in range(N):
    visited = []
    for j in range(N) :
        if i != j and j not in visited:
            visited.append(j)
            recur(matrix[i], visited, j)
            visited.pop()