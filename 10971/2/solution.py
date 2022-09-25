import sys

N = int(sys.stdin.readline())
matrix = sys.stdin.readlines()
for i in range(len(matrix)):
    matrix[i] = list(map(int, matrix[i].rstrip().split()))

min_cost = 1000000 * N + 1

def travel(visited, v, cur_cost, start):
    global min_cost
    if cur_cost > 0 and v == start:
        cur_cost += matrix[v][start]
        min_cost = min(min_cost, cur_cost)
        return
    
    for i in range(N):
        if v != i and visited[i] == False and matrix[v][i] > 0 and matrix[v][i] <= min_cost:
            visited.append(i)
            cur_cost += matrix[v][i]
            travel(visited, i, cur_cost, start)
            visited.pop()

visited = []
for i in range(N):
    visited.append(i)
    start = i
    travel(visited, i, 0, start)
    visited.pop()

print(min_cost)