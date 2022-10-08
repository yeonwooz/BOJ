import sys

def divided():
    return

N,M = map(int, sys.stdin.readline().split())

arr = []
for i in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    arr.append(row)

year = 0

dr = [0, -1, 0, +1] # 시계방향으로 생각하면 편함
dc = [-1, 0, +1, 0]

while True:
    print(arr)
    # if divided():
    #     break
    if  year ==2: break


    year += 1
    # 1년 뒤 녹음
    for i in range(N):
        for j in range(M):
            
            # 바다라면 스킵
            if arr[i][j] == 0: continue
            
            # 빙산이면 바다면적만큼 빼기 (음수전까지)
            melt_cnt = 0
            for idx in range(4):
                if arr[i+dr[idx]][j+dc[idx]] == 0:
                    melt_cnt += 1
            arr[i][j] = max(0, arr[i][j] - melt_cnt)

print(year)