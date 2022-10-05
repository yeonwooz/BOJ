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

    start = 0
    end = M - 1

    # Lower Bound: 가장 왼쪽사대?
    while start < end:
        mid = (start + end) // 2

        if dx <= shooters[mid]:
            # 더 왼쪽으로 가본다 
            end = mid
        else:
            # 오른쪽으로 가야 함
            start = mid + 1

    # print(start, mid, end, dx)
        
    if catch(animal, shooters[start], L): answer += 1
    elif start > 1 and catch(animal, shooters[start - 1], L): answer += 1
    elif start < M - 1 and catch(animal, shooters[start + 1], L): answer += 1

print(answer)

