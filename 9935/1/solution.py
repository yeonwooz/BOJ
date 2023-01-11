#started at 2:03
import sys

s = sys.stdin.readline().rstrip()
boom = sys.stdin.readline().rstrip()
boom_ptr = -1
# 대소문자 구분 O => C4 != c4

stack = []
lastCha = boom[-1]
length = len(boom)

for i in range(len(s)) :
    cha = s[i]
    stack.append(cha)
    # print("cha", cha, 'boom_ptr', boom_ptr, 'boom[boom_ptr + 1]', boom[boom_ptr + 1])
    if cha == lastCha and ''.join(stack[-length:]) == boom:
        del stack[-length:]

answer = ''.join(stack)

if answer == '':
    print("FRULA")
else:
    print(answer)
#finished at 3:10 -> 시간초과
#https://mytodays.tistory.com/23
