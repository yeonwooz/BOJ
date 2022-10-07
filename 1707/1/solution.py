#started at 3:34
#https://ji-gwang.tistory.com/293
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 6)
K = int(input())

def dfs(v, group):
    in_teams[v] = group  # 현재 방문지점인 v의 그룹넘버 지정.  
    # 그룹이 두개이므로 번호는 (1, -1) 둘 중 하나

    for i in graph[v]: # v에서부터 연결된 점들에 대해
        if not in_teams[i]: # i의 팀번호가 아직 없음 
            if not dfs(i, -group): # i의 팀번호가 -1인지 구했음 (dfs return T/F)
                return False
                # v-i는 연결되어있으므로 인접정점인데 -1 그룹에 속하지는 않는다면 이분그래프가 아니다
        elif in_teams[i] == in_teams[v]: # i의 팀번호가 v의 팀번호와 같음
            return False
    return True

for _ in range(K):
    V, E = map(int, input().split())
    graph = [[] for _ in range(V + 1)]
    in_teams = [False] * (V+1)

    for _ in range(E):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)
    
    for i in range(1, V+1):
        if not in_teams[i]:
            result = dfs(i, 1)  # start, group_number
            if not result:
                break
    
    print("YES" if result else "NO")