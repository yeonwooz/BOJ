import sys

N = int(sys.stdin.readline())
matrix = sys.stdin.readlines()
for i in range(len(matrix)):
    matrix[i] = list(map(int, matrix[i].rstrip().split()))

min_cost = 1000000 * N + 1

def travel(visited, v, start, cur_cost, has_started):
    global min_cost
    print(min_cost, cur_cost)
    if has_started and v == start:
        # 두번째 점 이후에 시작점으로 돌아왔으면 무조건 종료하되,
        if False not in visited:
            # 모든 도시를 돌았을 때만 순회한 경우로 카운트
            min_cost = min(min_cost, cur_cost)
        return
    
    for i in range(N):
        if v != i and visited[i] == False and matrix[v][i] > 0 and matrix[v][i] <= min_cost:
            visited[i] = True
            cur_cost += matrix[v][i]
            travel(visited, i, start, cur_cost, True)
            visited[i] = False

visited = [False] * N
travel(visited, 0, 0, 0, False)
# 최적경로 사이클을 찾는 것이기 때문에, 모든 정점 탐색할 필요 없이 아무 정점에서나 시작해도 된다. 어느 정점에서 시작하든 최적 사이클은 똑같다.

print(min_cost)