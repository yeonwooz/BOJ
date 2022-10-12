# https://data-flower.tistory.com/82
import sys
from collections import deque
N,M = map(int, sys.stdin.readline().split())

board = [0] * 101  # 100번까지 
visited = [False] * 101 #방문여부 체크

ladder =  dict() #사다리 좌표
snake = dict() # 뱀 좌표
for i in range(N):
    a, b = map(int, sys.stdin.readline().split())
    ladder[a] = b
    
for i in range(M):
    a, b = map(int, sys.stdin.readline().split())
    snake[a] = b

# 게임의 목표는 1번 캄에서 시작해 100번 칸에 도착하는 것이다
q = deque([1])

while q:
    x =  q.popleft()
    if x == 100:
        #100번 칸에 도착하면 더이상 진행하지 않는다
        print(board[x]) #이동 횟수 출력
        break
    
    for dice in range(1,7):
        next_pos = x + dice
        if next_pos <= 100 and not visited[next_pos]:
            if next_pos in ladder.keys():
                # 다음 위치가 사다리면
                next_pos = ladder[next_pos]
                # 사다리가 가리키는 위쪽칸으로 이동
            if next_pos in snake.keys():
                # 다음 위치가 뱀이면
                next_pos = snake[next_pos]
                # 뱀이 가리키는 아래쪽 칸으로 이동
            if not visited[next_pos]:
                visited[next_pos] = True
                # next_pos 으로 이동
                board[next_pos] = board[x] + 1 # 이동횟수 추가
                q.append(next_pos)
