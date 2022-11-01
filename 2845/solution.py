import sys

def getInput():
    return sys.stdin.readline().rstrip()

L, P = map(int, getInput().split())
people = (P * L)

nums = list(map(int, getInput().split()))

answer = []
for num in nums:    
    answer.append(num-people)

print(*answer)
