#started at 5:36
import sys

def is_in_area(shooter_pos, animal_pos, l):
    return abs(shooter - animal[0]) + animal[1] <= l

M, N, L = map(int, input().split())
# M = 사대의 수       /       N = 동물의 수     /      L = 사정거리

shooters = list(map(int, input().split()))
# 사대는 y좌표가 0인 라인에 일직선으로 놓여있다

animals = []

for _ in range(N):
    x, y = map(int, input().split())
    if y <= L:
        animals.append((x, y))
 
# 앞 사대에서 잡으면 뒷 사대에서 잡을 수 없다
# 전체 사대의 사정거리 영역 안에 있는 동물의 수가 답인 듯하다
# 포인트 : 각 동물의 입장에서, 가장 가까운 양쪽의 사대를 이분탐색으로 찾아 사냥할 수 있는지 확인

shooters.sort()
animals.sort()

answer = 0

for i in range(len(animals)):
    animal = animals[i]

    start_idx = 0
    end_idx = M - 1

    # if animal[1] > L:
    #     continue

    while start_idx <= end_idx:
        mid = (start_idx + end_idx) // 2
        shooter = shooters[mid]
        if animal[0] == shooters[mid] or is_in_area(shooter, animal, L):
            answer += 1
            break
        elif animal[0] < shooters[mid]:
            end_idx = mid - 1
        else: 
            start_idx = mid + 1

print(answer)

#finished at 6:00 -> 60점