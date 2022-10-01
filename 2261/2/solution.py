#started at 4:58
import sys

def dac(start_idx, end_idx):
    global min_distance

    if end_idx - start_idx == 0:
        return 0
    if end_idx - start_idx == 1:
        dist = (dots[end_idx]['x'] - dots[start_idx]['x']) ** 2 + (dots[end_idx]['y'] - dots[start_idx]['y']) ** 2
        return dist

    mid = (start_idx + end_idx) // 2

    min_distance = min(dac(start_idx, mid), dac(mid, end_idx))

    targets = []
    for i in range(start_idx, end_idx + 1):   
        if (dots[mid]['x'] - dots[i]['x']) ** 2 < min_distance: 
                # x_diff가 최소거리보다 작아서 일단 후보에 등록
                targets.append(dots[i])

    # targets.sort(key=lambda d:d['y'])
    targets = sorted(targets, key=lambda d: d['y'])

    lt = len(targets)
    for i in range(lt - 1):   
        for j in range(i + 1, lt):
            if (targets[i]['y'] - targets[j]['y']) ** 2 < min_distance:
                min_distance = min(min_distance, 
                (targets[i]['x'] - targets[j]['x']) ** 2 + (targets[i]['y'] - targets[j]['y']) ** 2
                )
            else:
                # 현재점이 x좌표에 의해 후보였으나, y좌표간 차이가 min_distance 보다 커서 탈락. 뒤의 점은 더 볼 필요가 없다.
                break     
            
    # x좌표간 차이, y좌표간 차이 각각이 min_distance보다 작으면서 두 점 사이의 거리제곱이 최소인 min_distance을 찾았다.
    return min_distance

if __name__ == "__main__":
    n = int(sys.stdin.readline())
    dots = []
    for _ in range(n):
        x,y = map(int, sys.stdin.readline().split(' '))
        dots.append({'x': x, 'y': y})

    # dots.sort(key = lambda d:d['x'])
    dots = sorted(dots, key=lambda d: d['x'])

    global min_distance
    min_distance = (20000 ** 2) * 2

    print(dac(0, n-1))