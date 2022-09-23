import sys
N = int(sys.stdin.readline())

list = [0] * 20001
for i in range(N):
    num = int(sys.stdin.readline())
    list[num + 10000] += 1

for i in range(20001):
    if list[i] > 0:
        for j in range(list[i]):
            print(i - 10000)