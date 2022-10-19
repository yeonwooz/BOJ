#1071 소트
#started at 1:50
import sys
input = sys.stdin.readline

PERIOD = 1001
indices = [None] *  (PERIOD ** 2)

# print(indices[2] == None)
n = int(input())
nums = list(map(int, input().split()))
for num in nums:
    i = 0
    while True:
        if indices[i * PERIOD + num - 1] == None and indices[i * PERIOD + num + 1] == None:
            break
        i += 1

    indices[i * PERIOD + num] = num

# i = 0
# for num in range(PERIOD ** 2):
#     target = i * PERIOD + num

for num in range(PERIOD ** 2):
    for i in range(PERIOD):
        start = i * PERIOD 
        end = (i + 1) * PERIOD 
        target = indices[num]
        if target:
            print(target)
            break

#