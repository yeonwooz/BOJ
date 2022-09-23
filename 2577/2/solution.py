A = int(input())
B = int(input())
C = int(input())

comp = A * B * C
# list = [0 for i in range(10)]
list = [0] * 10
for c in str(comp):
    list[int(c)] += 1
for num in list:
    print(num)