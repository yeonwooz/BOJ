#started at 3:43
import sys

N = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readline().split())) 
nums.sort()

if N == 3:
    print(" ".join(str(s) for s in nums))
else:
    min_abs = 3000000000
    answer = []
    for i in range(N-2):
        for j in range(i+1, N-1):
            two_sum = nums[i] + nums[j]
            if nums[i] > 0 and nums[j] > 0 and two_sum > min_abs :
                break
            start = j + 1
            end = N - 1

            while start <= end:
                mid = (start + end) // 2
                sum = two_sum + nums[mid]
                # print('nums[i], nums[j], nums[mid]', nums[i], nums[j], nums[mid],  'min_abs', min_abs, 'sum', sum)

                if abs(sum) < abs(min_abs):
                    min_abs = sum
                    answer = [nums[i], nums[j], nums[mid]]

                if sum == 0:
                    min_abs = 0
                    answer = [nums[i], nums[j], nums[mid]]
                    break

                if sum > 0:
                    # 양수니까 더 작아질수도 있다
                    end = mid - 1
                
                elif sum < 0:
                    # 음수니까 더 커질수도 있다
                    start = mid + 1

            if min_abs == 0:
                break  

    answer.sort()
    print(" ".join(str(s) for s in answer))
    #finished at 4:14 => 시간초과 /  pypy로 제출시 정답