#started at 9:58
import sys
# 두 점의 (x좌표차이) ** 2 + (y좌표차이) **2 중 최소

def getDist(p1, p2):
    return (p1['x'] - p2['x'])**2 + (p1['y'] - p2['y'])**2

def dac(start, end):
    if start == end:
        return 0
    if end - start == 1:
        return getDist(dots[start], dots[end])

    # 분할정복 : 왼쪽영역, 오른쪽영역 
    mid = (start + end) //2
    min_distance = min(dac(start, mid), dac(mid, end))

    targets = []
    for i in range(start, end + 1):
        if (dots[mid]['x'] - dots[i]['x']) ** 2 < min_distance: 
            # x_diff가 최소거리보다 작아서 일단 후보에 등록
            targets.append(dots[i])
    
    targets = sorted(targets, key=lambda d: d['y'])

    tl = len(targets)
    for i in range(tl - 1):
        for j in range(i + 1, tl):
            if (targets[i]['y'] - targets[j]['y']) ** 2 < min_distance:
                min_distance = min(min_distance, getDist(targets[i],targets[j]))
            else:
                break
    return min_distance

if __name__ == "__main__":
    n = int(sys.stdin.readline())
    dots = []
    for _ in range(n):
        x,y = map(int, sys.stdin.readline().split())
        dots.append({
            'x': x,
            'y': y
        })
    dots = sorted(dots, key=lambda d: d['x'])

    global min_distance 
    min_distance = (20000 ** 2) * 2

     # index

    print(dac(0, n-1))

#fisished at 10:55
# https://my-coding-notes.tistory.com/103