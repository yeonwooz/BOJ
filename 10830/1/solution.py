# started at 10:43
import sys
N, B = map(int, sys.stdin.readline().split())
matrix = [] * N 
for _ in range(N):
    matrix.append(list(map(int, sys.stdin.readline().split())))

def product_mat(U, V):
    n = len(U)
    result = [[0 for _ in range(n)] for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += U[i][k] * V[k][j]
            result[i][j] %= 1000
    return result

def recur(A, B):
    if B == 1:
        return A
    if B == 2:
        return product_mat(A, A)

    rec_called = recur(A, B//2)
    if B % 2 == 0:
        return product_mat(rec_called, rec_called)
    else:
        return product_mat(product_mat(rec_called, rec_called), A)

result = recur(matrix, B)
for i in range(N):
    print(" ".join(str(s % 1000) for s in result[i]))
# # finished at 12:14
