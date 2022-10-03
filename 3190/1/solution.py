#started at 1:35
# row_q, col_q
import sys
N = int(sys.stdin.readline())
K = int(sys.stdin.readline())
apples = []
for _ in range(K):
    r,c = map(int, sys.stdin.readline().split())
    apples.append({'r':r, 'c':c})

apples.sort(key=lambda d:d['c'])

change_cnt = int(sys.stdin.readline())

pos = {'r':1, 'c':1}
row_q = [1]
col_q = []
time = 0
cur_direction = 1
crashed = False
for i in range(change_cnt):
        X, C = sys.stdin.readline().split()
        X = int(X)
        while time <= X:
            time += 1 # 시간이 1초 흘러서 움직인다

            if cur_direction == 1:
                if pos['r'] + 1 > N and time < X: 
                    # 아직 방향바꿀시간이 안됐는데 벽에 부딪힘 => 게임 끝
                    crashed = True
                    break
                elif time == X and (C == 'D' or C == 'L'):
                    # 방향을 2번째방향으로 바꾸어서, 기존에 row_q가 있으면 뺴고, 없으면 쌓기 시작
                    cur_direction = 2
                    if row_q:
                        row_q.pop()
                    else:    
                        row_q.append(pos['r'] + 1)
                else:
                    # 방향바꿀 시간이 안됐고, 벽에 부딪히지 않았음. 진행가능.
                    # col_q를 쌓는다 
                    col_q.append(pos['c'] + 1)


            if cur_direction == 2:
                if pos['c'] + 1 > N and time < X: 
                    # 아직 방향바꿀시간이 안됐는데 벽에 부딪힘 => 게임 끝
                    crashed = True
                    break
                elif time == X and (C == 'D' or C == 'L'):
                    # 방향을 3번째방향으로 바꾸어서, 기존에 col_q가 있으면 뺴고, 없으면 쌓기 시작
                    cur_direction = 3
                    if row_q:
                        row_q.pop()
                    else:    
                        row_q.append(pos['r'] + 1)
            
                else:
                    # 방향바꿀 시간이 안됐고, 벽에 부딪히지 않았음. 진행가능.
                    # row_q 쌓는다 
                    col_q.append(pos['r'] + 1)




            # TODO 사과 먹어서 pop(0) 하는 조건 추가

            # TODO 벽을 만나거나, 4 -> 
        if crashed == True:
            break


print(time)