#started at 11:59
import sys
input = sys.stdin.readline

V,E = map(int, input().split())
edges = []

roots = [i for i in range(V+1)]

for _ in range(E):
    a,b,c = map(int, input().split())
    edges.append((a,b,c))

edges.sort(key = lambda d:d[2])

def find(v):
    if v != roots[v]:
        roots[v] = find(roots[v])
    return roots[v]

answer = 0

for a,b,c in edges:
    aroot = find(a)
    broot = find(b)
    if aroot != broot:
        roots[min(aroot,broot)] = max(aroot,broot)
        answer += c # 왜 루트 다를 때만 더하는 건지????

print(answer)