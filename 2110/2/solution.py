#started at 4:36
import sys
N, C = map(int, sys.stdin.readline().split())
arr = [] 
# 수직선상의 x좌표들
for _ in range(N):
    arr.append(int(sys.stdin.readline().rstrip()))

# 공유기 사이의 거리를 모두 동일하게 한다고 가정하고 조금씩 늘려나간다
# 지정된 공유기 개수보다 더 많이 놓을 수 있다면 조건이 성립하는 것

arr.sort()
start = 1 # 공유기 최소 2개 이상이므로 최소 거리 1
end = arr[-1] - arr[0]

MAX_H = 0

while start <= end:
    mid = (start + end) // 2 
    # 이번 집에 두고 다음 집까지 거리를 볼때, 이 mid보다 같거나 크면 놓을 수 있다 

    prev_idx = 0
    routers = 1
    for i in range(1, N):
        if arr[i] - arr[prev_idx] >= mid:
            # 거리가 충분히 떨어져있어서 설치할 수 있다
            prev_idx = i
            routers += 1

    if routers >= C:
        MAX_H = max(MAX_H, mid)
        # 거리를 더 넓힐 수 있을까?
        start = mid + 1
    else:
        # 거리를 더 좁혀야 한다
        end = mid - 1

print(MAX_H)
#finished at 4:50
# start <= end, start < end, end = mid - 1, end = mid 가 계속 헷갈림,,