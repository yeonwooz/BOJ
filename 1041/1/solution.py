#1041 주사위
#started at 11:16
import sys
input = sys.stdin.readline
n = int(input())
nums = list(map(int, input().split()))
nums.sort()
if n == 1:
    answer = sum(nums) - nums[5]
    print(answer)
    exit()

min_answer = 50 * 6 * (1000000 ** 3)
for num in nums:
    arr = nums[0:]
    arr.remove(num)

    answer = ((n-2) ** 2) * 5 * arr[0] + (n-2) * 8 * (arr[0] + arr[1]) + (n-2) * 4 * (arr[0]) + 4 * (arr[0] + arr[1] + arr[2]) + 4 * (arr[0] + arr[1])
    min_answer = min(min_answer, answer)

print(min_answer)

#finished at 11:24 => 반례를 찾아야 한다
#12:58 ???