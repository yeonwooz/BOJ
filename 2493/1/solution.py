#started at 7:40
import sys
N = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split(' ')))

answer = [0] * N
stack = []
top = -1
for i in range(N):
    h = towers[i]
    if i == 0 or top == -1:
        stack.append(h)
        top += 1
    else:
        if stack[top] > h:
            stack.append(h)
            top += 1
            answer[i] = i
        else:
            ptr = i
            while top >= 0 and stack[top] <= h:   
                ptr -= 1
                stack.pop()
                top -= 1
            stack.append(h)
            top += 1
            answer[i] = ptr   

s = ""
for num in answer:
    s += str(num) + " "
print(s.rstrip())

#finished at 7:53 -> 시간초과
#finished at 8:00 -> 출력초과 (WHY?)