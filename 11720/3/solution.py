import sys
input = sys.stdin.readline

N = int(input())
num = input()
sum = 0
for i in range(N):
    sum += int(num[i])
print(sum)

