import sys
n = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))

dlens = [1] * (n) # i번째 인덱스 기준 최장 증가 부분수열

for i in range(1,n):
    for j in range(i):
        if nums[j] < nums[i]:
            # dlens[i] = dlens[j] + 1
            dlens[i] = max(dlens[j] + 1, dlens[i])
# print(dlens[n-1])
print(max(dlens))