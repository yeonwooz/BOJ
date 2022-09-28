import sys
N = int(sys.stdin.readline())
# 규칙을 찾을 수 있을까?

i = 1
cnt = 0
while i <= N:
    s = str(i)
    cnt += s.count('3') + s.count('6') + s.count('9')
    i += 1
print(cnt)
