# 17829 222 풀링/ 수연
#started at 10:35
import sys
n = int(sys.stdin.readline())

arr = [[] for _ in range(n)]
for i in range(n):
    arr[i] = list(map(int, sys.stdin.readline().split()))

def recur(sidelen, matrix):
    if sidelen == 1:
        return matrix[0][0]
    
    newarr = [[] for _ in range(sidelen // 2)]
    for i in range(0, sidelen, 2):
        for j in range(0, sidelen, 2):
            nums = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]]
            nums.sort()
            newarr[i//2].append(nums[2])
    return recur(sidelen // 2, newarr)

print(recur(n, arr))
