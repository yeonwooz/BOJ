#started at 4:45
import sys
M, N, L = map(int, input().split())
# M = 사대의 수       /       N = 동물의 수     /      L = 사정거리

spots = list(map(int, input().split()))
# 사대는 y좌표가 0인 라인에 일직선으로 놓여있다

coords = []

for _ in range(N):
    x, y = map(int, input().split())
    if y <= L:
        coords.append((x, y))
 
# 앞 사대에서 잡으면 뒷 사대에서 잡을 수 없다
# 전체 사대의 사정거리 영역 안에 있는 동물의 수가 답인 듯하다
# 포인트 : 각 동물의 입장에서, 가장 가까운 양쪽의 사대를 이분탐색으로 찾아 사냥할 수 있는지 확인

spots.sort()
coords.sort()

answer = 0
idx = 0

for ax, ay in coords:
    left = idx
    right = M - 1
    mid = 0
    while left <= right:
        mid = (left + right) // 2
        if spots[mid] <= ax: # 현재 사대가 이 동물의 왼쪽에 있을 때
            if mid == M - 1 or spots[mid + 1] > ax:
                # 현재 사대가 마지막이거나, 다음사대가 이 동물의 오른쪽에 있다면, 탐색을 종료한다
                    break
            left = mid + 1
        else:
            right = mid - 1

    idx = mid # 현재지점부터 탐색시작
    if abs(ax - spots[mid]) + ay <= L:
        answer += 1
    elif M > mid + 1 and abs(ax - spots[mid + 1]) + ay <= L:
        answer += 1

print(answer)

# https://velog.io/@bbumjun/%EB%B0%B1%EC%A4%80-8983.-%EC%82%AC%EB%83%A5%EA%BE%BC
#finished at