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
    # print("cha", cha, 'boom_ptr', boom_ptr, 'boom[boom_ptr + 1]', boom[boom_ptr + 1])

    if  boom_ptr < len(boom) - 1 and boom[boom_ptr + 1] == cha:
        # 이번 문자가 폭발문자열의 다음 문자와 같다면, boom_ptr을 올려준다.
        boom_ptr += 1
        # print("cut>>", cha, boom_ptr)
    stack.append(cha)

    # 폭발문자열의 포인터가 마지막을 통과했다면 stack에서 그만큼 pop
    if boom_ptr + 1 == len(boom):
        for _ in range(boom_ptr + 1):
            stack.pop()
        boom_ptr = -1

st_ptr = 0
boom_ptr = -1
while(st_ptr < len(stack)):
    # 스택에 남아있는 값들 처리 
    # print('stack[st_ptr]',stack[st_ptr], 'boom_ptr', boom_ptr, 'boom[boom_ptr]', boom[boom_ptr])
    if stack[st_ptr] == boom[boom_ptr + 1]:
        boom_ptr += 1
    
    if boom_ptr + 1 == len(boom):
        for _ in range(boom_ptr + 1):
            stack.pop()
        boom_ptr = -1  

    st_ptr += 1

if stack:
    answer = "".join(stack)
print(answer)
#finished at 3:10 -> 시간초과
