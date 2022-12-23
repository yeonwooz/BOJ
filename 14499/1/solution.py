import sys

def input():
    return sys.stdin.readline().rstrip()


def roll(dir):
    a, b, c, d, e, f = dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]
    if dir == 1: #동
        dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = d, b, a, f, e, c

    elif dir == 2: #서
        dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = c, b, f, a, e, d

    elif dir == 3: #북
        dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = e, a, c, d, f, b

    else:   #남
        dice[0], dice[1], dice[2], dice[3], dice[4], dice[5] = b, f, c, d, a, e

N,M,x,y,k = map(int, input().split())   # x,y = 시작점의 행,열

arr = [[] * N for i in range(N)]

for i in range(N):
    nums = list(map(int, input().split()))
    arr[i] = nums

dr = [0, 0, -1, 1]
dc = [1, -1, 0, 0]
dice = [0, 0, 0, 0, 0, 0]

mvs = list(map(int, input().split()))

nr = x
nc = y
for i in mvs:
    if 0 <= nr < N and 0 <= nc < M:
        roll(i)
        nr += dr[i-1]
        nc += dc[i-1]

        #주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 0이면, 주사위의 바닥면에 쓰여 있는 수가 칸에 복사된다. 주사위 수 유지
        if arr[nr][nc] == 0:
            arr[nr][nc]= dice[-1]

        #주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 1 ~ 9 이면 칸에 적힌 수가 주사위의 바닥면으로 복사되며, 칸에 쓰여 있는 수는 0이 된다.   
        elif arr[nr][nc] > 0:
            dice[-1] = arr[nr][nc]
            arr[nr][nc] = 0

        print(dice[0])
