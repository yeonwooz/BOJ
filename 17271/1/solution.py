#17271 리그 오브 레전설 (Small)  / 수연
# started at 10:33

# A = 1초 실행,  B = M초 실행

#A 가 i개일때 => (N-i) // M 만큼이 B의 개수  /   (N-i) % M이 0이어야만 조합을 센다.     / A * i 개와 B * M개를 일렬로 배치하는 조합

import sys
from itertools import combinations
N,M = map(int, sys.stdin.readline().split())
# print(N,M)

#if, N = 4 and M = 2  => AAAA, AAB, ABA, BAA, BB
cnt = 0

for i in range(N+1):
    # i는 A의 개수
    space = N - i
    if (space) % M != 0: 
        continue
    str = 'A' * i + 'B' * (space // M)
    print(str)
    if 'A' in str and 'B' in str:
        # print(str)
        cnt += 2
    else:
        cnt +=1

    


    

print(cnt)