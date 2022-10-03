#started at 9:38
import sys
from collections import deque



def solve(n, ls):
    # 너비들을 배열로 관리
    min_height = 1000000000
    stack = deque()
    while len(ls) > 0:
        popped =  ls.popleft()
        stack.append(popped)

    print(stack)

if __name__ == "__main__":
    while True:
        try:
            inputs = list(map(int, sys.stdin.readline().split()))
            n = inputs[0]
            if n > 0:
                solve(n, deque(inputs[1:]))
        except Exception as e:
            print(e)
            break


