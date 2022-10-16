#started at 10:58
import sys
sys.setrecursionlimit(10**9)
n = int(input())

MIN = 50000
def change(n, cnt):
    global MIN
    if n == 0:
        MIN = min(MIN, cnt)
    if n >= 5:
        change(n-5, cnt+1)
    if n >= 2:
        change(n-2, cnt+1)

change(n, 0)
print(MIN)