#started at 3:20
from sys import stdin
N = int(stdin.readline())
drinks = list(map(int, stdin.readline().split()))
drinks.sort(reverse=True)


# 큰 컵일수록 양이 최대한 유지되어야 함 
for i in range(N-1):
    left = drinks[i]
    right = drinks[i+1]
    right = right / 2  # 반을 넣으면 반은 흘려서 없어짐
    left += right
    drinks[i+1] = left

print(drinks[N-1])
    