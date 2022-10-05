#started at 10:49
import sys

N = int(sys.stdin.readline().strip())
sizes = list(map(int, sys.stdin.readline().split()))
sizes.sort()

cnt = 0
for i in range(N - 1, 0, -1):
    #sizes[i] 보다 작은범위만 비교
    left = 0
    right = i
    # lowerbound 까지

    while left < right:
        mid = (left + right) // 2
        
        if sizes[mid] >= sizes[i] * 0.9:
            #더 줄일 수 있으니 낮춘다
            right = mid
        else:
            left = mid + 1

    # print(f"l={left}, m={mid}, r={right}, i={i}")
    cnt += i - right

print(cnt)
#finished at 11:24