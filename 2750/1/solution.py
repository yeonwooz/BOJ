N = int(input())

list = []
for i in range(N):
    num = int(input())
    list.append(num)

list.sort()
for num in list:
    print(num)