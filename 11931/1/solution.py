import sys
N = int(sys.stdin.readline())

max_nums_size = 2000001
nums = [False] * max_nums_size
buff_idx = 1000000

for _ in range(N):
    num = int(sys.stdin.readline())
    nums[num + buff_idx] = True

for i in range(max_nums_size - 1, -1, -1):
    if nums[i]: print(i - buff_idx)