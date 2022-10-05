# https://bio-info.tistory.com/116
from bisect import bisect_left

N = int(input())
A = list(map(int, input().split()))
dp = [] # LIS 저장

for num in A:
    k = bisect_left(dp, num) # 현재 LIS에서 num이 어디에 들어가야할지?
    # print('num', num, 'k', k)
    # print('dp', dp)
    if len(dp) == k:
        dp += [num]  # dp 오른쪽에 [num]을 concat  == dp.append(num)
    else:
        dp[k] = num 
        # 만약 기존 dp의 마지막보다 작았으면, dp요소 중 num과 동일하거나 num보다 더 커지기 직전의 인덱스를 받았을 것. 
        # dp가 오름차순을 유지할 수 있도록 새로운 값으로 대체 

print(len(dp))

