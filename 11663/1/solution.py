#11663 선분 위의 점  / 수연
#started at 10:32
import sys

def getinput():
    return sys.stdin.readline().rstrip()
N, M = map(int, getinput().split())

dots = list(map(int, getinput().split()))
dots.sort()
for _ in range(M):
    left_idx = 0
    right_idx = N - 1
    x, y = map(int, getinput().split())
    # lines.append((s,e))
    # x~y 이분탐색을 선분의 앞뒤점에 대해서 하고 범위 구하기
    while (left_idx <= right_idx):
            mid = (left_idx + right_idx) // 2
            if dots[mid] < x:
                left_idx = mid + 1
            else:
                right_idx = mid - 1

    first_idx = left_idx
    left_idx = 0
    right_idx = N - 1

    while (left_idx <= right_idx):
            mid = (left_idx + right_idx) // 2
            if dots[mid] > y:
                right_idx = mid - 1
            else:
                left_idx = mid + 1
    end_idx = right_idx + 1
    print(end_idx-first_idx)