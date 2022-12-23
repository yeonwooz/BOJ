import sys

def input():
    return sys.stdin.readline().rstrip()

N,M,x,y,k = map(int, input().split())   # x,y = 시작점의 행,열

arr = [[] * N for i in range(N)]

for i in range(N):
    nums = list(map(int, input().split()))
    arr[i] = nums

mvs = list(map(int, input().split()))

drows = [(4,0),(1,0),(3,0)]
dcols = [(2,0),(1,0),(5,0),(6,0)]

dr_idx = 1  # 인덱스
dc_idx = 1 # 인덱스 > -1이면 고려하지 않음

top = drows[dr_idx]

r = x
c = y
for i in range(k):
    di = mvs[i]
    
    if di == 1:  # 동
        nc = c + 1
        dr_idx = (dr_idx - 1) % 3
        ntop = drows[dr_idx][1]
    elif di == 2:  #서
        nc = c - 1
        dr_idx = (dr_idx + 1) % 3
        ntop = drows[dr_idx][1]
    elif di == 3:  #북
        nr = r + 1
        dc_idx = (dc_idx - 1) % 4
        ntop = dc_idx[dc_idx][1]
    elif di == 4:  #남
        nr = r - 1
        dc_idx = (dc_idx + 1) % 4
        ntop = dc_idx[dc_idx][1]

    if 0 <= nr < N and 0 <= nc < M:
        r = nr
        c = nc   
        top = ntop    

        #주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 0이면, 주사위의 바닥면에 쓰여 있는 수가 칸에 복사된다. 주사위 수 유지
        if arr[r][c] == 0:
            bottom = top[(dc_idx + 2) % 4][1]
            arr[r][c]= bottom

        #주사위를 굴렸을 때, 이동한 칸에 쓰여 있는 수가 1 ~ 9 이면 칸에 적힌 수가 주사위의 바닥면으로 복사되며, 칸에 쓰여 있는 수는 0이 된다.   
        elif arr[r][c] > 0:
            # top[]
            # top[1] = arr[r][c]
            arr[r][c] = 0

        print(top)
