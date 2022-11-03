#11666 선물 수연
#started at 10:36

N, L, W, H = map(int, input().split())
start, end = 0, int((L * W * H) ** (1/3)) + 1  # 세제곱근 + 1까지

for _ in range(10000):
    mid = (start + end) / 2
    count = (L // mid) * (W // mid) * (H // mid)
    if count >= N:
        start = mid
    else:
        end = mid

print("%.15f" %(end))

# https://sophuu.tistory.com/50