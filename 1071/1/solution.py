#1071 소트
#started at 1:50
# https://seongjuk.tistory.com/entry/BOJ-%EB%B0%B1%EC%A4%80-1071%EB%B2%88-%EC%86%8C%ED%8A%B8
import sys
input = sys.stdin.readline

n = int(input())
nums = list(map(int, input().split()))

num_cnt = [0] * 1002 # 인덱스 에러 방지. (1 더 큰 연속된 수 있는지 확인하기 때문에)

for num in nums:
    num_cnt[num] += 1   # 인덱스cur에 위치한 숫자 cur를 몇개 출력해야 하는가?

cur = 0
result = [] # 출력할 리스트
while sum(num_cnt) > 0:
    if num_cnt[cur]:
        # 출력할 cur가 있을 때

        if num_cnt[cur+1] == 0:
            # cur의 연속수가 없을 때 
            
            for _ in range(num_cnt[cur]):
                result.append(cur) 
            num_cnt[cur] = 0
                # result에 cur를 num_cnt[cur]  (개수)  만큼 추가
        
        else:
            # cur의 연속수가 있을 때
            for next_num in range(cur+2, 1001):  # for else : for문에서 break안걸릴 때만 else 실행
                if num_cnt[next_num]:
                    # cur+2 이후의 수(next_num)가 존재할 때, 현재 next_num에 대해서

                    for _ in range(num_cnt[cur]):
                        result.append(cur)     
                    num_cnt[cur] = 0
                    # cur를 모두 출력하고

                    result.append(next_num)
                    num_cnt[next_num]-= 1
                    # next_num를 하나 출력해서 연속성을 방지하자
                    break

            else:   
                #cur+2 이후의 수(next_num)가 없을 때
                # => cnt+1 을 모두 출력, cnt를 모두 출력
                for _ in range(num_cnt[cur+1]):
                    result.append(cur+1)
                num_cnt[cur+1] = 0
                for _ in range(num_cnt[cur]):
                    result.append(cur)
                num_cnt[cur] = 0

    cur += 1
print(*result)