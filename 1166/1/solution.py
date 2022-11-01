#11666 선물 수연
#started at 10:36

N, L, W, H = map(int, input().split())
container = L * W * H

# A*A*A * N개 => L* W * H 
# A의 최대값?

A = 0

start = 0
end =  int((container) ** (1/3)) + 1  # 세제곱근 + 1까지

max_A = 0

cnt = 0
while start <= end:
    if cnt == 15:
        break
    print(start, end)
    mid = (start + end) // 2  # 새로 갱신된 A길이
    box = mid ** 3  # 박스의 부피
    total = box * N  # 박스 N개 총 부피

    if total - box < container < total + box:
        max_A = mid
        break
    if total - box > container:
        # total이 컨테이너 부피 넘어감. 줄여야 함
        end = mid - 1
    else:
        # 자리 남음! 늘려볼 수 있지 않을까?
        if mid > max_A:
            mid = max_A
        start = mid + 1
    cnt += 1

print(max_A)