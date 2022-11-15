#11663 선분 위의 점  / 수연
#started at 10:32
import sys

def getinput():
    return sys.stdin.readline().rstrip()
N, M = map(int, getinput().split())

dots = list(map(int, getinput().split()))

# lines = []
for _ in range(M):
    s, e = map(int, getinput().split())
    # lines.append((s,e))
    # s~e 이분탐색
    cnt = 0
    for dot in dots:
        start = s
        end = e
        while (start <= end):
            mid = (start+end) // 2
            if mid == dot:
                cnt += 1
                break
            elif mid < dot:
                start = mid + 1
            else:
                end = mid - 1

    print(cnt)

# lines.sort(key=lambda line:line[0])

# print(lines)
