# DP로 풀고 , BFS로 풀기 
#started at 7:30
import sys,heapq
from collections import deque
input = sys.stdin.readline
MAX = 100

def BFS(v):
    global k, min_cnt, found_combination
    if coins[v] == k:
        found_combination = True
        min_cnt = 1
        return

    q = deque()
    check[coins[v]] = 1
    q.append((v, 1, coins[v]))

    while q:
        popped, cnt, cur = q.popleft()
        if cur == k:
            found_combination = True
            min_cnt = min(min_cnt, cnt)
            return

        for i in range(len(coins)):
            if cur + coins[i] <= k and check[cur+coins[i]] == 0:
                check[cur+coins[i]] = 1
                q.append((i, cnt+1, cur + coins[i]))
    return -1

n,k = map(int, input().split())
coins = set()

for _ in range(n):
    coins.add(input().rstrip())

coins = sorted(coins, reverse = True)
coins = list(map(int, coins))

min_cnt = MAX
found_combination  = False
check = [0] * (k+1)
for i in range(len(coins)):
    BFS(i)
    # print("found_combination", found_combination)

if found_combination:
    print(min_cnt)
else:
    print(-1)
# 메모리 초과