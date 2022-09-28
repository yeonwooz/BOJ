# 3221 개미의 이동
import sys

# L기준으로 방향을 바꾸고 나서 현 시점의 개미의 정렬을 확인
def move(T, ants_at_T, L):
    for time in range(1, T):
        prev_pos = ants_at_T[time - 1]
        # if (prev_pos[1] == L || prev_pos[1] == 0):
        #     ants_at_T[time - 1] = []
        # else:



if __name__ == "__main__":
    L, T = map(int, sys.stdin.readline().split())
    # L은 끝점
    # T초 후에 각 개미의 위치는?
    N = int(sys.stdin.readline().rstrip())
    ants_at_T = [[]] * T # 시간대별 [개미번호, 위치, 방향, 플래그]
    for i in range(N):
        pos, toward = sys.stdin.readline().split()
        # 네번째 인자: 방향 바꿔야 하는 플래그
        ants_at_T[0].append([i+1, int(pos), toward, False])
    print('a', ants_at_T)
    # move(T, ants_at_T, L)



