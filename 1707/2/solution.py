#started at 4:22
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)

K = int(input())

def is_bigraph(node, group_num):
    visited[node] = group_num
    for i in graph[node]:
        if visited[i] == False:
            # 아직 방문한 적 없는 인접노드가 그룹넘버가 다른가? => 아니라면 이분그래프가 아니다.
            if not is_bigraph(i, -group_num):
                return False
        else:
            #이미 방문한 적 있는 인접노드라면 그룹이 뭘까?
            if visited[i] == group_num:
            # 방문한적 있는 인접노드가 이미 group_num 을 가지고 있었다! => 이분그래프가 아니다.
                return False
    return True

for _ in range(K):
    V,E = map(int, input().split())
    graph = [[] for _ in range(V+1)]
    for _ in range(E):
        u,v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)
    
    visited = [False] * (V+1)
    group_number = 1  # 1, -1

    result = True
    for i in range(1, V+1):  # 연결이 끊겼을 수도 있어서, for문으로 그 점에서 시작시켜주어야 한다
        if not visited[i]:
            result = is_bigraph(i, group_number)
            if not result:
                break
    
    print('YES' if result else 'NO')