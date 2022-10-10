# DP로 풀고 , BFS로 풀기 
#started at 7:30
import sys,heapq
input = sys.stdin.readline
from collections import deque
MAX = 100

def BFS(v):
    global k, min_cnt, found_combination
    if coins[v] == k:
        found_combination = True
        min_cnt = 1
        return

    q = deque()
    q.append((v, 1, coins[v]))

    while q:
        popped, cnt, cur = q.popleft()
        if cur == k:
            found_combination = True
            min_cnt = min(min_cnt, cnt)
            return

        for i in range(n):
            q.append((i, cnt+1, cur + coins[i]))

    return -1

n,k = map(int, input().split())
coins = []
for _ in range(n):
    coins.append(int(input()))

coins.sort(reverse = True)

min_cnt = MAX
found_combination  = False
for i in range(n):
    BFS(i)
    # print("found_combination", found_combination)

if found_combination:
    print(min_cnt)
else:
    print(-1)
# 메모리 초과