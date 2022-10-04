#started at 2:03
import sys
from collections import deque
s = sys.stdin.readline().rstrip()
boom = sys.stdin.readline().rstrip()
boom_ptr = -1
# 대소문자 구분 O => C4 != c4

answer = "FRULA"

stack = deque()
for i in range(len(s)) :
    cha = s[i]
    if  boom_ptr < len(boom)  and boom[boom_ptr + 1] == cha:
        # 이번 문자가 폭발문자열의 다음 문자와 같다면, boom_ptr을 올려준다.
        boom_ptr += 1
    stack.append(cha)

    # 폭발문자열의 포인터가 마지막을 통과했다면 pop
    if boom_ptr == len(boom):
        boom_ptr = -1
        for _ in range(boom_ptr):
            stack.pop()
    
    # while(stack):
    #     if len(stack) >= len(boom) and 
    # 기존 스택 값들 빼주기
    # if stack[]





print(answer)
#finished at