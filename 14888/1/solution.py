import sys
import math
from itertools import permutations

N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))
plus, minus, mult, div = list(map(int, sys.stdin.readline().split()))

ops = []
for i in range(plus):
    ops.append('+')
for i in range(minus):
    ops.append('-')
for i in range(mult):
    ops.append('x')
for i in range(div):
    ops.append('/')

pers = permutations(ops, N - 1)
# print(list(pers)[0])
min_result = 1000000001
max_result = -1000000001
for per in list(pers):
    for i in range(len(per)):
        result = nums[0]
        for j in range(N - 1):
            print(nums,    per)
            if per[j] == '+':
                result += nums[j+1]
            elif per[j] == '-':
                result -= nums[j+1]
            elif per[j] == 'x':
                result *= nums[j+1]
            else:
                result = math.floor(result / nums[j+1])
        if min_result > result:
            min_result = result
        if max_result < result:
            max_result = result


print(max_result)
print(min_result)

