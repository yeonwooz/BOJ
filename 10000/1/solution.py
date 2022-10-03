#started at 11:00
#원은 교차하지 않는다. 문제 똑바로 읽기!
#https://wonyoung2257.tistory.com/79
import sys
N = int(sys.stdin.readline())
circles = []
for _ in range(N):
    x,r = map(int, sys.stdin.readline().split())
    # N개의 원이 일렬로 접하면서 나열된다면 양쪽에서 각각 여는괄호 닫는괄호를 닫을 것이므로 둘다 넣어준다.

    circles.append((x-r, '('))  # 중심에서 반지름만큼 왼쪽에서 원을 연다
    circles.append((x+r, ')'))  # 중심에서 반지름만큼 오른쪽에서 원을 닫는다

# circles.sort(key=lambda d:d['x'])
circles = sorted(circles, key=lambda tup:(tup[0], -ord(tup[1]))) # 람다로 매핑한 튜플 기준으로 정렬
# print(circles)


stack = [] 
# 좌표, 괄호모양, 추가공간개수  => 리스트가 그대로 도형이 된다. (원의 절대적인 크기는 무시하고 서로 접하는지만 확인)

answer = 1

for i in range(N * 2):
    #원괄호 리스트를 탐색
    position, bracket = circles[i]
    if len(stack) == 0:
        stack.append({'pos': position, 'bracket': bracket, 'space_cnt': 0})
        # 처음에는 원의 좌표와 괄호모양, 추가공간개수를 넣어준다. 아직 원이 닫히지 않아서 추가공간은 없다.
        continue

    if bracket == ')':
    #닫는괄호를 만난 경우
        if stack[-1]['space_cnt'] == 0:
            answer += 1
        elif stack[-1]['space_cnt'] == 1:
            answer += 2
        stack.pop()
        # 완성된 원괄호 쌍 제거

        if i < N * 2 - 1:
            # 마지막원이 아닐때,
            if circles[i+1][0] > position:
                # 다음원괄호의 좌표가 현재 괄호의 좌표보다 오른쪽에 있을 때
                stack[-1]['space_cnt'] = 0

    else:
    #여는괄호를 만난 경우
        if stack[-1]['pos'] == position:
            # 이전 괄호의 좌표와 현재 괄호의 좌표가 같을 때, 즉 두 원이 접한 경우
            stack[-1]['space_cnt'] = 1
        stack.append({'pos': position, 'bracket': bracket, 'space_cnt': 0})

print(answer)