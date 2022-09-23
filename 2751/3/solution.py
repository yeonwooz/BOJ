import sys 
N = int(sys.stdin.readline())

list = []
for i in range(N):
    num = int(sys.stdin.readline())
    list.append(num)

list.sort()
for num in list:
    print(num)