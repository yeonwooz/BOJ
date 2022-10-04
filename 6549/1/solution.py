#started at 9:38
# https://hooongs.tistory.com/330
import sys
from collections import deque

def solve(n, rec):
    stack = deque()
    answer = 0

    for i in range(n):
        # 스택에 세로로 채울 것
        # 스택에 마지막으로 차있는 값은 현재까지 탐색한 rec의 값중 가장 큰 값이다
        while len(stack) > 0 and rec[stack[-1]] > rec[i]:
            tmp = stack.pop()
            
            if len(stack) == 0:
                width = i
            else:
                width = i - stack[-1] - 1
            answer =  max(answer, width * rec[tmp])
        stack.append(i)

    while len(stack) > 0:
        tmp = stack.pop()

        if len(stack) == 0:
            width = n
        else:
            width = n- stack[-1] - 1
        answer = max(answer, width * rec[tmp])

    print(answer)

if __name__ == "__main__":
    while True:
        try:
            rec = list(map(int, sys.stdin.readline().split()))
            n = rec.pop(0)
            if n == 0:
                break
            solve(n, rec)
        except Exception as e:
            break