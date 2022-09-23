import sys
N = int(sys.stdin.readline())

list = [0] * 2000001
for i in range(N):
    num = int(sys.stdin.readline())
    list[num + 1000000] = 1

for i in range(2000001):
    if list[i] == 1:
        print(i - 1000000)