N = int(input())

list = [0] * 2000001
for i in range(N):
    num = int(input())
    list[num + 1000000] = 1

for i in range(2000001):
    if list[i] == 1:
        print(i - 1000000)