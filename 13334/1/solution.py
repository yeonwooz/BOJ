#started at 8:33
import sys
import heapq

people = []
n = int(sys.stdin.readline())
for _ in range(n):
    h, o = map(int, sys.stdin.readline().split()) # house, office
    pos = (min(h, o), max(h, o))
    heapq.heappush(people, pos)
d = int(sys.stdin.readline())

print('people', people)
max_cnt = 0
for i in range(n - 1):
    start = people[i][0]
    end = start + d
    if people[i][1] <= end:
        cnt = 1
    else:
        cnt = 0
    for j in range(i + 1, n):
        if start <= people[j][0] and people[j][1] <= end:
            cnt += 1
        # print('cnt', cnt)
    max_cnt = max(max_cnt, cnt)

print(max_cnt)
#finished at 9:00 -> 시간초과