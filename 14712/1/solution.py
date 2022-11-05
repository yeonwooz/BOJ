# 14712 넴모넴모 / 수연
# started at 10:34

# idea :  '12345'  / '135' 각 열의 문자열 같은지 비교하기?

from sys import stdin
import itertools

N,M = map(int, stdin.readline().split())
arr = [[(i+1) for i in range(N)] for j in range(M)]

for j in range(M):
    for cnt in range(1, N):  # j열에 몇칸채우는지
        # j열에서 cnt칸을 채울 것임
        jc_cnt = itertools.combinations(arr[j], cnt)
        print("j", j)
        for comb in jc_cnt:
            j_str = *list(comb)


        

    



        