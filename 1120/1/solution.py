A, B = input().rstrip().split()

Alen = len(A)
Blen = len(B)

min_diff = 51
idx = 0

diff = 0
while (idx < Alen):
    if A[idx] != B[idx]:
        diff += 1
    idx += 1
min_diff = min(min_diff, diff)

diff = 0
idx = -1
while (idx >= -Alen):
    if A[idx] != B[idx]:
        diff += 1
    idx -= 1

min_diff = min(min_diff, diff)
print(min_diff)