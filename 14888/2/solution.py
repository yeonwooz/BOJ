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

def insert_ops(combination, depth, visited, op_idx):
    if depth == ops_cnt:
        print(combination)
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