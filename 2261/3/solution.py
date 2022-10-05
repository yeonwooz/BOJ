# 2261 가장 가까운 두 점 / 분할정복
#started at 5:29
import sys

def recur(start, end):# end 포함 안함
    global dots, min_distance
    mid = (start + end) // 2

    # 분할정복으로 두 영역 각각의 점들의 최소거리를 받아와서 둘중 최소값확인
    d1 = recur(start, mid)
    d2 = recur(mid, end)
    min_d = min(d1, d2)
    min_distance = min(min_distance, min_d)

    # mid랑 모든 점 거리 비교.
    # x기준 정렬된 것에서 후보 추림
    filtered = []
    for i in range(start, end):
        d = (dots[mid][0] - dots[i][0]) ** 2 + (dots[mid][1] - dots[i][1]) ** 2 
        if d <= min_distance:
            filtered.append(dots[i])

    #  y기준 정렬 후 min_distance 파악
    filtered.sort(key=lambda l:l[1])
    for i in range(len(filtered)):
        d = (filtered[mid][0] - filtered[i][0]) ** 2 + (filtered[mid][1] - filtered[i][1]) ** 2 
        if d > min_distance: 
            break

        min_distance = min(min_distance, d)   
    return min_distance 

n = int(sys.stdin.readline())

dots = []
for i in range(n):
    x, y = map(int, sys.stdin.readline().split())
    dots.append([x,y])

dots.sort(key = lambda l:l[0])
min_distance = 20000 ** 2 *2 
min_distance = recur(0, n)
print(min_distance)