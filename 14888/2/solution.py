import math
import sys
N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))
ops = list(map(int, sys.stdin.readline().split()))

max_result = -1000000001
min_result = 1000000001

def dfs(cur_idx, cur_result, plus_cnt, minus_cnt, multiply_cnt, divide_cnt):
    global max_result, min_result
    if plus_cnt == 0 and minus_cnt == 0 and multiply_cnt == 0 and divide_cnt == 0:
        max_result = max(max_result, cur_result)
        min_result = min(min_result, cur_result)
        return
        
    
    if plus_cnt:
        dfs(cur_idx + 1, cur_result + nums[cur_idx + 1], plus_cnt - 1, minus_cnt, multiply_cnt, divide_cnt)

    if minus_cnt:
        dfs(cur_idx + 1, cur_result - nums[cur_idx + 1], plus_cnt, minus_cnt - 1, multiply_cnt, divide_cnt)

    if multiply_cnt:
        dfs(cur_idx + 1, cur_result * nums[cur_idx + 1], plus_cnt, minus_cnt, multiply_cnt - 1, divide_cnt)

    if divide_cnt:
        if cur_result < 0:
            result = math.floor((cur_result * -1) / nums[cur_idx + 1]) * -1
        else:
            result = math.floor((cur_result) / nums[cur_idx + 1])
        dfs(cur_idx + 1, result, plus_cnt, minus_cnt, multiply_cnt, divide_cnt - 1)     

dfs(0, nums[0], ops[0], ops[1], ops[2], ops[3])

print(max_result)
print(min_result)