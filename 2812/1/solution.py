#started at 10:17
N, K = map(int, input().split())
s = list(input())


k = K # 원본 K를 놔두고, K로 숫자제거 카운트
stack = []
for i in range(N):
    while k > 0 and stack and stack[-1] < s[i]:
        # stack에 값이 있는데 이번에 넣을 수보다 작다면 빼준 후에 이번 숫자를 넣어준다
        # K > 0 조건도 while 문 안에 같이 있어야 함
        stack.pop()
        k -= 1
    stack.append(s[i])

# while k > 0 and stack:
#     stack.pop()
#     k -= 1

print("".join(stack[:N-K]))  # 모든 수를 채웠는데도 아직 K가 남아있다면 stack에서 마저 뺀다

#finished at 11:27 -> 틀림