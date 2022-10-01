#started at 5:36
import sys

def is_in_area(shooter_pos, animal_pos, l):
    return abs(shooter_pos - animal_pos[0]) + animal_pos[1] <= l

M, N, L = map(int, sys.stdin.readline().split())
# M = 사대의 수       /       N = 동물의 수     /      L = 사정거리

shooters = list(map(int, sys.stdin.readline().split()))
# 사대는 y좌표가 0인 라인에 일직선으로 놓여있다

animals = []

for _ in range(N):
    x, y = map(int, sys.stdin.readline().split())
    if y <= L:
        animals.append((x, y))
 
# 앞 사대에서 잡으면 뒷 사대에서 잡을 수 없다
# 전체 사대의 사정거리 영역 안에 있는 동물의 수가 답인 듯하다
# 포인트 : 각 동물의 입장에서, 가장 가까운 양쪽의 사대를 이분탐색으로 찾아 사냥할 수 있는지 확인

answer = 0
shooters.sort()

for i in range(len(animals)):
    animal = animals[i]

    start_idx = 0
    end_idx = M - 1
    mid = 0

    # if animal[1] > L:
    #     continue
    while start_idx < end_idx:
        mid = (start_idx + end_idx) // 2
        
        if animal[0] < shooters[mid]:
            end_idx = mid - 1
        elif animal[0] > shooters[mid]:
            start_idx = mid + 1
        else:
            start_idx = mid
            break

    if is_in_area(shooters[start_idx], animal, L):
        # 현재 사대에서 현재 동물을 잡을 수 있다
        answer += 1
    elif start_idx + 1 < M and is_in_area(shooters[start_idx + 1], animal, L):
        # 탐색할 사대가 남아있고 다음 사대에서 현재 동물을 잡을 수 있다 
        answer += 1
    elif start_idx > 0 and is_in_area(shooters[start_idx - 1], animal, L):
        # 이전 사대가 있었고 이전 사대에서 현재 동물을 잡을 수 있다
        answer += 1

print(answer)

#finished at 6:00 -> 60점
# 동물은 굳이 정렬할 필요 없다 -> animals.sort() 제거
# 일단 사대를 찾고, 찾은 사대와 양쪽 사대 세개중의 하나가 동물을 잡을 수 있는 경우 카운트
