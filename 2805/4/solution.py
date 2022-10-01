#started at 4:20
import sys

N, M = map(int, sys.stdin.readline().split())
trees = list(map(int, sys.stdin.readline().split()))

# 나무길이는 0 이상 max(nums)이하
start = 0
end = max(trees)
mid = 20
MAX_H = 0

while start < end: # LOWER BOUND -> end는 mid가 될 수도 있기 때문에 start == end값은 반복문 조건에 포함하지 않음
    mid = (start + end) // 2

    sum = 0
    for tree in trees:
        if tree >= mid:
            sum += (tree - mid)
    
    if sum < M:
        # M미터보다 길이가 작다. (나무 양이 모자라다.) 자르는 높이를 낮추어보자.
        end = mid
    else:
        # M미터보다 길이가 크다. (나무 양이 충분하다.) 자르는 높이를 더 높일 수도 있을까?
        start = mid + 1

        if MAX_H < mid:
            MAX_H = mid
print(MAX_H)
#finished at 4:34 