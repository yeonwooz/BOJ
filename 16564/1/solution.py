# started at 4:03
import sys

N, K = map(int, sys.stdin.readline().split())
lvs = []
for _ in range(N):
    lvs.append(int(sys.stdin.readline()))

# lvs 정렬
lvs.sort()

# 이분탐색 
# 1. T : lvs중 최소값 
# 2. T의 범위는 lvs[0] ~ lvs[N-1] + K

start = lvs[0]
end = lvs[N-1] + K
MAX_T = 0

while start <= end:  # 어디서 끝나는지 확인할 것!
    mid = (start + end) // 2
    T = mid

    rest = 0
    for num in lvs:
        if T > num:
            rest += (T - num)

    if rest > K:
        end = mid - 1
    else:
        if MAX_T < T:
            MAX_T = T
        start = mid + 1

print(MAX_T)

#finished at 4:41