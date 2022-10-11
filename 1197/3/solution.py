import sys

V,E = map(int, sys.stdin.readline().split())

graph = [[] for _ in range(V+1)]
roots = [i for i in range(V+1)]
Elist = []
for _ in range(E):
    a,b,c = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)
    Elist.append(Elist, (c,a,b))

def find(v):
    if v == roots[v]:
        return v
    roots[v] = find(roots[v])
    # 자기 인덱스에 해당하는 부모노드를 만날때까지 재귀

answer = 0

for w,u,v in Elist:
    uroot = find(u)
    vroot = find(v)
    if uroot != vroot:
        roots[min(uroot, vroot)] = max(uroot, vroot)
        answer += w
print(answer)

