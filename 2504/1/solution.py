#started at 2:12
import sys

def solve(pars):

    stack = []
    answer = 0
    tmp = 1 # 연산결과 임시 저장공간
    for i in range(len(pars)):
        if pars[i] == '(':
            stack.append(pars[i])
            tmp *= 2
        elif pars[i] == '[':
            stack.append(pars[i])
            tmp *= 3
        elif pars[i] == ')':
            if not stack or stack[-1] == '[': # 스택이 비어있거나 마지막이 '[' 이라면
                answer = 0
                break
            if pars[i - 1] == '(': 
                answer += tmp
            stack.pop()
            tmp //= 2 # 이미 정답결과에 연산되었기 떄문에 다시 나누어서  원래상태로 되돌림
        else:
            if not stack or stack[-1] == '(':
                answer = 0
                break
            if pars[i - 1] == '[':
                answer += tmp
            stack.pop()
            tmp //= 3
            
    if stack: # 스택에 괄호가 남아있다면 올바른 괄호가 아니다
        return 0
    return answer

if __name__ == "__main__":
    pars = sys.stdin.readline().rstrip()
    print(solve(pars))

#finished at 3:35