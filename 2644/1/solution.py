#2644 촌수계산 우수연
# started at 10:35
import sys
sys.setrecursionlimit(10**4) #  파이썬 깊이는 10 ** 3뎁스까지가 기본설정이다
input = sys.stdin.readline


def DFS(v, visited, depth):
    global found, relation
    visited.append(v)

    if v == you:
        found = True
        relation = depth
        return

    for node in graph[v]:
        if v != node and node not in visited:
            DFS(node, visited, depth + 1)

n = int(input())
me, you = map(int, input().split())
m = int(input())

graph = [[] * (n+1) for _ in range(n+1)]
for i in range(m):
    parent,child = map(int, sys.stdin.readline().split())
    graph[child].append(parent)
    graph[parent].append(child)

visited = []
found = False
relation = 0
DFS(me, visited, 0)
if not found:
    print(-1)
else:
    print(relation)