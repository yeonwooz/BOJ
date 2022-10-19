#1041 주사위
#started at 11:16
import sys
input = sys.stdin.readline
n = int(input())
nums = list(map(int, input().split()))

if n == 1:
    nums.sort()
    answer = sum(nums) - nums[5]
    print(answer)
    exit()
else:
    min_answer = 50 * 6 * (1000000 ** 3)
    min_lists = []
    min_lists.append(min(nums[0], nums[5]))
    min_lists.append(min(nums[1], nums[4]))
    min_lists.append(min(nums[2], nums[3]))
    min_lists.sort()

    min1 = min_lists[0]
    min2 = min_lists[1]
    min3 = min_lists[2]

    one_face = ((n-2) ** 2) * 5 + (n-2) * 4
    two_face = (n-2) * 8 + 4
    three_face = 4
    answer = one_face * min1 + two_face * (min1 + min2) + three_face * (min1 + min2 + min3)
    min_answer = min(min_answer, answer)

print(min_answer)

# finished at 11:24 => 반례를 찾아야 한다
# 12:58 ???
# https://kkk4872.tistory.com/130