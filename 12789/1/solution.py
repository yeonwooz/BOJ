#12789 도키도키 간식드리미 / 수연
#started at 2:08
from sys import stdin
from collections import deque
input = stdin.readline

n = int(input())
nums = deque(list(map(int, input().split())))
waiting = deque()

idx = 1
while nums:
    if nums and nums[0] == idx:
        popped = nums.popleft()
        idx += 1
    else:
        waiting.appendleft(nums.popleft())
    while waiting and waiting[0] == idx:
        waiting.popleft()
        idx += 1

print("Nice" if not waiting else "Sad")
