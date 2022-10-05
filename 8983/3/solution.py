#started at 11:29
import sys

def catch(animal, shooter, l):
    x,y = animal
    return abs(shooter - x) + y <= l

M,N,L = map(int, sys.stdin.readline().split())
shooters = list(map(int, sys.stdin.readline().split()))
shooters.sort()
answer = 0

for i in range(N):
    animal = list(map(int, sys.stdin.readline().split()))
    dx, dy = animal

    if dy > L: continue

    start = 0
    end = M - 1

    while start < end:
        mid = (start + end) // 2

        if dx == shooters[mid]:
            start = mid
            break
        if dx < shooters[mid]:
            # 동물보다 오른쪽 좌표에 사대가 있다 -> 더 왼쪽에 있는지 탐색
            end = mid - 1
        else:
            # 동물보다 왼쪽 좌표에 사대가 있다 -> 더 오른쪽에 있는지 탐색
            start = mid + 1

    # print(start, mid, end, dx)
        
    if catch(animal, shooters[start], L): answer += 1
    elif start > 0 and catch(animal, shooters[start - 1], L): answer += 1
    elif start < M - 1 and catch(animal, shooters[start + 1], L): answer += 1

print(answer)

