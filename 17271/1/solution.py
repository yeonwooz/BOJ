#17271 리그 오브 레전설 (Small)  / 수연
# started at 10:33

# A = 1초 실행,  B = M초 실행

#A 가 i개일때 => (N-i) // M 만큼이 B의 개수  /   (N-i) % M이 0이어야만 조합을 센다.     / A * i 개와 B * M개를 일렬로 배치하는 조합

import sys
N,M = map(int, sys.stdin.readline().split())

#if, N = 4 and M = 2  => AAAA, AAB, ABA, BAA, BB

dp =  [1] * (N+1)
if N >= M:
    dp[M] = 2

for i in range(M+1, N+1):
    dp[i] = (dp[i-1] + dp[i-M]) % 1000000007

print(dp[N]%1000000007)