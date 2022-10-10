# DP로 풀고 , BFS로 풀기 
#started at 7:30
import sys
from collections import deque
input = sys.stdin.readline

def BFS():
    global k, flag
    q =  deque()
    for i in range(len(coins)):
        if coins[i] <= k:
            check[coins[i]] = 1
            q.append((1, coins[i]))

    while q:
        cnt, cur = q.popleft()
        if cur == k:
            print(cnt)
            flag = False
            break

        for i in range(len(coins)):
            if cur + coins[i] <= k and check[cur+coins[i]] == 0:
                check[cur+coins[i]] = 1
                q.append((cnt+1, cur + coins[i]))
    
    return -1

n, k = map(int, input().split())
coins = set(int(input()) for _ in range(n))
check = [0] * (k+1)
flag = True

BFS()

if flag:
    print(-1)