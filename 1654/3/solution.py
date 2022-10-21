#started at 8:10
import sys
k, n = map(int, sys.stdin.readline().split())

lans = []
for _ in range(k):
    lans.append(int(sys.stdin.readline()))

answer = 0
mx = max(lans)  # 1 <= answer <= mx 

start = 1
end = mx

while start <= end:
    mid = (start + end) // 2

    cnt = 0
    for lan in lans:
        cnt += lan // mid

    if cnt < n:
        # 조건 충족 못함. 길이를 줄여야 한다.
        end = mid - 1
    
    else:
        # 조건 충족함. 길이를 더 늘릴 수 있을까?
        start = mid + 1
        answer = max(answer, mid)

print(answer)
#finished at 8:25