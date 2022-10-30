#20365 블로그2 수연
#started at 10:25
import sys

def getInput(): 
    return sys.stdin.readline().rstrip()
    
N = int(getInput())
s = getInput()

def colorFrom(color):
    # color부터 (R/B)
    quests = [color] * N
    cnt = 1
    start_idx = 0
    while start_idx < N:
        for i in range(start_idx, N):
            if s[i] != quests[i]:
                quests[i] = s[i]
                cnt += 1
                for j in range(i+1, N):
                    if s[j] != quests[j]:
                        quests[j] = s[j]
                    else:
                        start_idx = j
                        break
                break
            else:
                if i == N-1:
                    start_idx = N
                    break
    return cnt

print(min(colorFrom('R'),colorFrom('B')))
#finished at 10:45