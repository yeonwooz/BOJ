import sys

def getInput():
    return sys.stdin.readline().rstrip()

N = int(getInput())
K = int(getInput())

arr = []
for i in range(N):
    arr.append([0] * N)

for i in range(K):
    row, col = map(int, getInput().split())
    arr[row-1][col-1] = 1

L = int(getInput())

mvs = dict()
for i in range(L):
    X, C = getInput().split()
    mvs[int(X)] = C
