#started at 10:17
N, K = map(int, input().split(' '))
s = list(input())

stack = []
for i in range(N):
    while K > 0 and stack and stack[-1] < s[i]:
        # stack에 값이 있는데 이번에 넣을 수보다 작다면 빼준 후에 이번 숫자를 넣어준다
        # K > 0 조건도 while 문 안에 같이 있어야 함
        stack.pop()
        K -= 1
    stack.append(s[i])

print("".join(stack))

#finished at 11:27