#started at 2:42
#1967 트리의 지름
#https://my-coding-notes.tistory.com/285
import sys
sys.setrecursionlimit(10**6)

N = int(sys.stdin.readline())
tree = [[] for _ in range(N+1)]
max_d = 0

for _ in range(N-1):
    a,b,c = map(int, sys.stdin.readline().split())
    tree[a].append((b,c))

def dfs(n,d):
    left, right = 0,0
    for toNode, w in tree[n]:
        # n에서부터 연결된 자식노드와 거기까지의 가중치(toNode, w) 기준으로,
        distance = dfs(toNode, w) # 맨 아래 자식까지 재귀로 내려가서 구해온 지름 (길이)
        if left <= right:
            # left 오른쪽 자식 가중치가 더 큼
            left = max(left, distance)
            # 왼쪽 자식까지의 거리와 재귀로 구한 지름 비교 후 더 큰 것
        else:
            right = max(right, distance)
            # 오른쪽 자식까지의 거리와 재귀로 구한 지름 비교 후 더 큰 것
    
    # left + right는 현재 노드 기준으로 지름이 된다 (교체했으니까)
    global max_d
    max_d = max(max_d, left+right)

    return max(left+d, right+d) # 이번 재귀 깊이에서는 왼쪽가중치와 오른쪽 가중치 중 큰 것 리턴

dfs(1, 0)
print(max_d)