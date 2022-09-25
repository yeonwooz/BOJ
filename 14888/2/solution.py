import math
import sys
N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))
ops_dict = dict()
ops_dict['+'], ops_dict['-'], ops_dict['*'], ops_dict['/'] = list(map(int, sys.stdin.readline().split()))

ops_arr = []
for k, v in ops_dict.items():
    for j in range(v):
        ops_arr.append(k)

ops_cnt = len(ops_arr)
# print(ops_arr)

max_result = -1000000001
min_result = 1000000001

def calculate(ops):
    result = nums[0]
    for i in range(ops_cnt):
        if ops[i] == '+':
            result += nums[i+1]
        elif ops[i] == '-':
            result -= nums[i+1]
        elif ops[i] == '*':
            result *= nums[i+1]
        elif ops[i] == '/':
            if result >= 0:
                result = math.floor(result / nums[i+1])
            else:
                result = math.floor(result * -1 / nums[i+1]) * -1
    return result

def insert_ops(combination, depth, visited, op_idx):
    global min_result, max_result
    if depth == ops_cnt:
        calculated = calculate(combination)
        min_result = min(min_result, calculated)
        max_result = max(max_result, calculated)
        return 
    
    for i in range(ops_cnt):
        if visited[i] == False:
            visited[i] = True
            combination.append(ops_arr[i])
            insert_ops(combination, depth + 1, visited, i)
            visited[i] = False
            combination.pop()
    

visited = [False] * len(ops_arr)
combination = []
for i in range(ops_cnt):
    visited[i] = True
    combination.append(ops_arr[i])
    insert_ops(combination, 1, visited, i)
    visited[i] = False
    combination.pop()

print(max_result)
print(min_result)