import sys
N = int(sys.stdin.readline())
# 규칙을 찾을 수 있을까?

i = 1
cnt = 0
while i <= N:
    s = str(i)
    for j in s:
        if int(j) == 3 or int(j) == 6 or int(j) == 9:
            cnt += 1 
    i += 1
print(cnt)
