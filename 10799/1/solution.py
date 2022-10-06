#started at 9:51
import sys

pars = sys.stdin.readline().rstrip()
stack = []
answer = 0
for i in range(len(pars)):
    if pars[i] == '(':
        stack.append('(')
    else:
        if pars[i-1] == '(':
            # 레이저
            stack.pop()
            answer += len(stack)
        else:
            # 막대기 종료
            stack.pop()
            answer += 1

print(answer)