#started at 1:35
#상하좌우 큐를 만들자
N = int(input())
K = int(input())
apples = []
for _ in range(K):
    r,c = map(int, input().split())
    apples.append({'r':r, 'c':c})

apples.sort(key=lambda d:d['c'])

cd = int(input())
cmds = []


time = 0

pos = {'r':1, 'c':1}

prev_direction = 1
cur_direction = 1
q1 = [pos] # 궤적을 기억하거나 자르면서 진행
q2 = []
q3 = []
q4 = []

for _ in range(K):
    X, C = input().split()
    X = int(X)
    while time <= X:
        if time == X:
            print("special_t: ", time)
        else:
            print("general_t: ", time)
        print("pos is", pos)
        time += 1

        if cur_direction == 1:
            pos['c'] += 1
        elif cur_direction == 2:
            pos['r'] += 1
        elif cur_direction == 3:
            pos['c'] -= 1
        elif cur_direction == 4:
            pos['r'] -= 1

