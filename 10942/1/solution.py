#started at 5:28
import sys
sys.setrecursionlimit(10 ** 9)
n = int(sys.stdin.readline())

nums = list(map(int, ('0 ' + sys.stdin.readline().rstrip()).split()))
m = int(sys.stdin.readline())
DP = [[-1] * (n+1) for _ in range(n+1)]

def ispal(s,e):
    if DP[s][e] == 1: # 팰린드롬
        return 1
    elif DP[s][e] == 0: # 팰린드롬 아님
        return 0
    if s == e or s + 1 == e and nums[s] == nums[e]:
        return 1 # 팰린드롬
    else:
        if nums[s] != nums[e]:
            return 0
        else:
            DP[s][e] = ispal(s+1, e-1)
            return DP[s][e]

for _ in range(m):
    s, e = map(int, sys.stdin.readline().split())
    print(ispal(s,e))
#finished at 5:40 