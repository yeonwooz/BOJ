#1071 소트
#started at 1:50
# https://seongjuk.tistory.com/entry/BOJ-%EB%B0%B1%EC%A4%80-1071%EB%B2%88-%EC%86%8C%ED%8A%B8
import sys
input = sys.stdin.readline

PERIOD = 1001
indices = [None] *  (PERIOD ** 2)

# print(indices[2] == None)
n = int(input())
nums = list(map(int, input().split()))

num_cnt = [0] * 1001

for num in nums:
    num_cnt[num] += 1   # 인덱스cur에 위치한 숫자 cur를 몇개 출력해야 하는가?

cur = 0
result = []
while sum(num_cnt) > 0:
    if num_cnt[cur]:
        if not num_cnt[cur + 1]:
            # 연속된 숫자가 없을 때는
            while num_cnt[cur]:
                result.append(cur)
                num_cnt[cur] -= 1
                # 현재숫자의 개수만큼 result에 추가
        else:
            # 연속된 숫자가 있을 때는

            '''
            for else : for 문에서 break가 없었다면, else 가 실행된다.
                       for 문에서 break로 중도에 빠져나간다면 else는 실행되지 않는다.
            '''
            for next_num in range(cur + 2, 1001):
                # 현재숫자보다 2 이상 큰 수가 있는지를 확인한다 
                if num_cnt[next_num]: 
                    # 현재숫자보다 2 이상 큰 수가 있다면,
                    result.extend(num_cnt[cur] * cur)
                    num_cnt[cur] = 0
                    # 일단 현재숫자는 result에 추가해두고, 

                    result.append(next_num)
                    num_cnt[next_num] -= 1  # 이미 next_num을  result에 추가했으니까, 다음 턴에 next_num을 탐색할 때는 하나 덜 출력해야 한다.

                    break  # => 이 경우 아래 else는 실행되지 않는다
                # => for문에 들어가지 않았거나, 들어갔더라도 38라인의 조건에 안 걸렸다면 아래 else가 실행된다
            else:
                # 현재숫자보다 2이상 큰 수가 없을 때,
                result.extend(num_cnt[cur+1] * cur+1)
                num_cnt[cur+1] = 0
                result.extend(num_cnt[cur] * cur)
                num_cnt[cur] = 0

        cur += 1

print(*result)