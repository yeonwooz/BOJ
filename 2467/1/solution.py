#started at 3:00
import sys

N = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readline().split()))

nums.sort()

nearest_sum = 2000000000
answer = []
for i in range(len(nums) - 1):
    start = i
    end = len(nums) - 1

    while start < end:
        mid = (start + end) // 2
        if i == mid: break
        sum = nums[i] + nums[mid]
        # print(i, mid, nums[i], nums[mid], 'sum', sum, 'nearest_sum', nearest_sum)
        if sum == 0:
            # nearest_sum = min(nearest_sum, sum)
            nearest_sum = 0
            answer = min(nums[i], nums[mid]), max(nums[i],nums[mid])
            break
        if sum < 0:
            # 더했는데 음수니까 합을 크게 더 만들자!
            if abs(sum) < abs(nearest_sum):
                nearest_sum = sum
                answer = min(nums[i], nums[mid]), max(nums[i],nums[mid])
            start = mid + 1
        else:
            # 더했는데 양수니까 합을 작게 더 만들자!
            if abs(sum) < abs(nearest_sum):
                nearest_sum = sum
                answer = min(nums[i], nums[mid]), max(nums[i],nums[mid])
            end = mid - 1

    if nearest_sum == 0:
        break

print(" ".join(str(s) for s in answer))
#finished at 3:19 => 틀림 