#started at 9:45
import sys

A, B, C = map(int, sys.stdin.readline().split())

def rec(A, B, C):
    mult = A ** B
    if mult <= C:
        return mult % C
    
    mod1 = rec(A, B//2, C)
    mod2 = rec(A, B - B//2, C)
    return (mod1 * mod2) % C

print(rec(A, B, C))
