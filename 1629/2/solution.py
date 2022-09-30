#started at 9:45
import sys

A, B, C = map(int, sys.stdin.readline().split())

def rec(a, b, c):
    if b == 1:
        return a % c

    mod1 = rec(a, b // 2, c) 
    mod2 = rec(a, b - b // 2, c) 
    return (mod1 * mod2) % c

print(rec(A,B,C))
