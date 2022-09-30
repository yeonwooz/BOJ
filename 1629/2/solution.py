#started at 9:45
import sys

A, B, C = map(int, sys.stdin.readline().split())

def rec(a, b, c):
    if b == 1:
        return a % c

    half = rec(a, b//2, c) # 이부분을 한번만 호출하고 캐싱해두고 써야 시간초과가 나지 않는다
    if b % 2 == 0:
        return (half ** 2) % c
    else:
        return ((half ** 2) * a) % c

print(rec(A,B,C))
#finished at 10:35