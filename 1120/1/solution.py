A, B = input().rstrip().split()

Alen = len(A)
Blen = len(B)

min_diff = 51
idx = 0

for i in range(Blen):
    if B[i] == A[0]:
        diff = Alen - 1
        idx = 1
        # print('B[i]', B[i])
        while idx < Alen and i+idx < Blen:
            # print('B[i+idx]', B[i+idx])
            # print("diff", diff)
            if B[i+idx] == A[idx]:
                diff -= 1
            idx += 1
        min_diff = min(diff, min_diff)

print(min_diff)