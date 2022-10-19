#14939 불 끄기
#started at 3:26
# https://devlibrary00108.tistory.com/162
# https://velog.io/@sunkyuj/python-%EB%B0%B1%EC%A4%80-14939-%EB%B6%88-%EB%81%84%EA%B8%B0
import sys
input = sys.stdin.readline

bulbs = []
for i in range(10):
    temp = list(input().rstrip())
    for j in range(10):
        if temp[j] == 'O':
            temp[j] = 1
            continue
        temp[j] = 0
    bulbs.append(temp)

dr = [-1,1,0,0,0]
dc = [0,0,0,-1,1]
answer = 101
dark = False

def press(board, r, c):
    for i in range(5):
        nr = r + dr[i]
        nc = c + dc[i]
        if 0 <= nr < 10 and 0 <= nc < 10:
            board[nr][nc] == 1 - board[nr][nc]
            # board[nr][nc] = (board[nr][nc] + 1) % 2  

for bulb in range(1 << 10):
    # 각 행의 각 열(전구)에 대해서 그리디 탐색할 것이므로 탐샐할 때마다 원본을 훼손하면 안됨 
    copied_bulbs =  [bulbs[i][:] for i in range(10)]
    cnt = 0

    mask = 1  # 0000000001
    for j in range(9, -1, -1):
        # 첫줄 맨 오른쪽부터 탐색
        if bulb & mask:
            #이 전구가 켜져있다면,
            press(copied_bulbs, 0, j)
            cnt += 1
            # 끄고, 끈 횟수 + 1
        mask <<= 1
        # 레프트 쉬프트 연산으로 0을 오른쪽에 붙여서 현재 위치를 끈 것(0)으로 바꾼다.
        # 현재 위치를 누르면 위, 아래, 양옆이 반전되기 때문에 이 연산을 통해 왼쪽이 영향을 받는다.
        # 어차피 증가한 mask는 바로 왼쪽을 탐색하는 데 쓰일 것이고 계속 누르다보면 특정 위치의 비트는 그 오른쪽 비트의 영향만 받을 것이므로, 한칸씩 밀리는 것에 의해 소실되는 맨 왼쪽 비트는 신경쓰지 않아도 된다.

    for i in range(1, 10):
    #2번째 줄부터 끝까지
        for j in range(10):
            # 각 행의 열(전구)을 보겠다
            if copied_bulbs[i-1][j]:
                # 바로 위의 전구가 켜져 있다면, 
                press(copied_bulbs, i, j)
                cnt += 1
        
    if copied_bulbs[9].count(1) == 0:
        dark = True
        answer = min(answer, cnt)

if dark:
    print(answer)
else:
    print(-1)
            
