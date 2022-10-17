#started at 11:35
import sys
str1 =  sys.stdin.readline().strip()
str2 =  sys.stdin.readline().strip()

len1 = len(str1)
len2 = len(str2)
dp = [[0] * (len1 + 1) for _ in range(len2 + 1)]

for i in range(1, len2+1):
    for j in range(1, len1+1):        
        if str2[i-1] == str1[j-1]:
            dp[i][j] = dp[i-1][j-1] + 1
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])

LCS_len = dp[len2][len1]
LCS = ''

i = len2
j = len1
while True:
    if i <= 0 or j <= 0: break
    if str2[i-1] == str1[j-1]:
        LCS = str1[j-1] + LCS
        i -= 1
        j -= 1
    else:
        if dp[i-1][j] > dp[i][j-1]:
            # 위쪽으로 가야 함
            i -= 1

        elif dp[i-1][j] < dp[i][j-1]:
            # 왼쪽으로 가야 함
            j -= 1

print(LCS_len)
print(LCS)
# finished at 11:55 => 시간초과 