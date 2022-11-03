# 1120번 수연
import sys
input = sys.stdin.readline

A, B = input().split()
Alen = len(A)
Blen = len(B)
diffs = []

for i in range(Blen - Alen + 1):
    diff = 0
    for j in range(Alen):
        # A의 j번째랑 B의 i+j번째랑 비교
        if B[i + j] != A[j]:
            diff += 1
    
    diffs.append(diff)

print(min(diffs))