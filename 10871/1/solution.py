N, X = input().split()
N = int(N)
X = int(X)
nums = input().split()

answer = ""
for num in nums:
    if int(num) < X:
        answer += str(num) + " "

print(answer)