#started at 9:35
import sys
N = int(sys.stdin.readline())
cards = list(map(int, sys.stdin.readline().split()))
cards.sort()
M = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))

answer = []
for i in range(M):
    target = nums[i]
    found = 0
    start = 0
    end = N - 1
    while start <= end:
        mid = (start + end) // 2

        if cards[mid] == target:
            found = 1
            answer.append(1)
            break
        if cards[mid] > target:
            end = mid - 1
        if cards[mid] < target:
            start = mid + 1
        
    if not found:
        answer.append(0)
    
print(" ".join(str(s) for s in answer))
#finished at 9:41