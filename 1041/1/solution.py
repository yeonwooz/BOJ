#1041 주사위
#started at 11:16
import sys
input = sys.stdin.readline
n = int(input())
nums = list(map(int, input().split()))
nums.sort()

sum = ((n-2) ** 2) * 5 * nums[0] + (n-2) * 8 * (nums[0] + nums[1]) + (n-2) * 4 * (nums[0]) + 4 * (nums[0] + nums[1] + nums[2]) + 4 * (nums[0] + nums[1])
print(sum)
#finished at 11:24 => 반례를 찾아야 한다