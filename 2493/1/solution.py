#started at 7:40
import sys
N = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split(' ')))

answer = [0] * N
stack = []

for i in range(N):
    h = towers[i]
    if i == 0:
        stack.append(h)
    else:
        if stack[-1] > h:
            stack.append(h)
            answer[i] = i
        else:
            ptr = i
            while len(stack) >= 1 and stack[-1] <= h:   
                ptr -= 1
                stack.pop()
            stack.append(h)
            answer[i] = ptr   

s = ""
for num in answer:
    s += str(num) + " "
print(s.rstrip())

#finished at 7:53 -> 시간초과
#finished at 8:00 -> 출력초과 (WHY?)