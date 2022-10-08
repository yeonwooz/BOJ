#started at 7:32
import sys
input = sys.stdin.readline

def DFS(ops): 
    # ops : 남은 연산자들의 개수
    # answer : 현재까지 구해진 조합
    global N
    # if ops.count(0) >= 4: 
    #     return
    for i in range(4):
        if ops[i] > 0:
            ops[i] -= 1 # 해당 연산자 배치  
            answer.append(i)
            DFS(ops) 
            answer.pop()
            ops[i] += 1

N = int(input())
nums = list(map(int, input().split()))
ops =  list(map(int, input().split()))

M = N -1 # 연산자가 끼어들 자리 개수

result = 0
min_result = 1000000000
max_result = -1000000000

for i in range(4):
    if ops[i] > 0:
        ops[i] -= 1 # 해당 연산자부터 배치  
        answer = [i]  # i번쨰 인덱스의 연산자가 조합 첫번째 자리에 들어감
        DFS(ops)  # answer조합이 구해지면, 
        print("answer", answer)
        result = nums[0]
        for idx in range(1, len(nums)):
            # print('nums[idx]', nums[idx])
            if answer[idx-1] == 0:
                result += nums[idx]
            elif answer[idx-1] == 1:
                result -= nums[idx]
            elif answer[idx-1] == 2:
                result *= nums[idx]
            else:
                if result > 0:
                    result //= nums[idx]
                else: 
                    result *= -1
                    result //= nums[idx+1]
                    result *= -1
        print(result)
        min_result = min(min_result, result)
        max_result = max(max_result, result)
        answer.pop()
        ops[i] += 1

# print(str(max_result) + '\n' + str(min_result)) 
