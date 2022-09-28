# 3221 개미의 이동
import sys
import copy

# TODO: 메모리초과 해결
# TODO: q_sort 사용
# TODO: 개미의 순서 왜 안바뀌는지 이해하기 (서로 부딪히는 경우에 대한 고려 필요X)

# L기준으로 방향을 바꾸고 나서 현 시점의 개미의 정렬을 확인

def move(N, T, ants, L):
    answer = []
    for init_pos, toward in ants:
        if toward == 'D':
            # 오른쪽으로 이동
            next_pos = init_pos + T
            if next_pos < L:
                answer.append(next_pos)
            else:
                if (next_pos // L) % 2 ==  1:
                    # 다음 위치까지 이동하는동안 L을 홀수번 지난경우
                    answer.append(L - next_pos % L)
                else:
                    answer.append(next_pos % L)
        else:
            # 왼쪽으로 이동
            next_pos = T + (L - init_pos)
            if next_pos < L:
                answer.append(L - next_pos)
            else:
                if (next_pos // L) % 2 == 1:
                    answer.append(next_pos % L)
                else:
                    answer.append(L - next_pos % L)

    answer.sort()
    print(" ".join(str(s) for s in answer))

if __name__ == "__main__":
    L, T = map(int, sys.stdin.readline().split())
    T += 1
    # L은 끝점
    # T초 후에 각 개미의 위치는?
    N = int(sys.stdin.readline().rstrip())
    ants = []
    for _ in range(N):
        pos, toward = sys.stdin.readline().split()
        ants.append([int(pos), toward])
    print(ants)
    move(N, T, ants, L)

