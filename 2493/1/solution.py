#started at 7:40
import sys
N = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split(' ')))

answer = []
stack = []

for i in range(N):
    while stack:
        if stack[-1][1] > towers[i]:
            answer.append(stack[-1][0] + 1)
            break
        else:
            stack.pop()
    if not stack:
        answer.append(0)
    stack.append([i, towers[i]])
print(" ".join(str(s) for s in answer).strip())

#finished at 7:53 -> 시간초과
#finished at 8:00 -> 출력초과 (WHY?)
#https://jjangsungwon.tistory.com/44