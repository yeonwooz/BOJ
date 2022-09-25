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

def calculate(op, next_num, cur_result):
    if op == '+':
        cur_result += next_num # nums[i+1]
    elif op == '-':
        cur_result -= next_num
    elif op == '*':
        cur_result *= next_num
    elif op == '/':
        if cur_result >= 0:
            cur_result = math.floor(cur_result / next_num)
        else:
            cur_result = math.floor(cur_result * -1 / next_num) * -1
    return cur_result

def insert_ops(combination, depth, visited, op_idx, cur_result):
    global min_result, max_result
    if depth == ops_cnt:
        result = calculate(combination[depth-1], nums[depth], cur_result)
        min_result = min(min_result, result)
        max_result = max(max_result, result)
        return 
    
    for i in range(ops_cnt):
        if visited[i] == False:
            visited[i] = True
            combination.append(ops_arr[i])
            result = calculate(combination[depth-1], nums[depth], cur_result)
            insert_ops(combination, depth + 1, visited, i, result)
            visited[i] = False
            combination.pop()
    
visited = [False] * len(ops_arr)
combination = []
for i in range(ops_cnt):
    visited[i] = True
    combination.append(ops_arr[i])
    insert_ops(combination, 1, visited, i, nums[0])
    visited[i] = False
    combination.pop()

print(max_result)
print(min_result)