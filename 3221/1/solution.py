# 3221 개미의 이동
import sys
import copy

# L기준으로 방향을 바꾸고 나서 현 시점의 개미의 정렬을 확인
def move(T, ants_at_T, L):
    for time in range(1, T):
        prev_pos = ants_at_T[time - 1]
        ants_at_T[time] = copy.deepcopy(prev_pos)

        for idx in range(len(ants_at_T[time])):
            pos = ants_at_T[time][idx]
            if pos[1] == L or pos[1] == 0:
                # 양끝점 도달
                if pos[2] == 'D':
                    ants_at_T[time][idx][2] = 'L'
                    ants_at_T[time][idx][1] -= 1
                else:
                    ants_at_T[time][idx][2] = 'D'
                    ants_at_T[time][idx][1] += 1
            else:
                if pos[2] == 'D':
                    ants_at_T[time][idx][1] += 1
                else:
                    ants_at_T[time][idx][1] -= 1


if __name__ == "__main__":
    L, T = map(int, sys.stdin.readline().split())
    T += 1
    # L은 끝점
    # T초 후에 각 개미의 위치는?
    N = int(sys.stdin.readline().rstrip())
    ants_at_T = [] * T # 시간대별 [개미번호, 위치, 방향]
    for i in range(T):
        ants_at_T.append([])
        
    for i in range(N):
        pos, toward = sys.stdin.readline().split()
        ants_at_T[0].append([i+1, int(pos), toward])

    move(T, ants_at_T, L)
    answer = []
    for ant in ants_at_T[T-1]:
        answer.append(ant[1])
    answer.sort()
    print(" ".join(str(s) for s in answer))


