# DP로 풀고 , BFS로 풀기 
#started at 7:30
import sys
from collections import deque
input = sys.stdin.readline
MAX = 100

def BFS():
    global k, min_cnt, found_combination
    q =  deque()
    for i in range(n):
        if coins[i] <= k and check[coins[i]] == 0:
            check[coins[i]] = 1
            q.append((i, 1, coins[i]))

    while q:
        popped, cnt, cur = q.popleft()
        if cur == k:
            return min(min_cnt, cnt)

        for i in range(n):
            if cur + coins[i] <= k and check[cur+coins[i]] == 0:
                check[cur+coins[i]] = 1
                q.append((i, cnt+1, cur + coins[i]))
    
    return -1

n, k = map(int, input().split())
coins=list(set(int(input()) for _ in range(n)))
check = [0] * (k+1)

min_cnt = MAX
print(BFS())