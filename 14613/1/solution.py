import sys
import math

W, L, D = map(float, sys.stdin.readline().split())
# print(W,L,D)

cur = 2000
tiers = [0] * 5

for win in range(21):
    for lose in range(21):
        for draw in range(21):
            if win + lose + draw == 20:
                new_score = cur + 50 * W * win - 50 * L * lose
                # 기댓값 = 확률 * 이득
                if 1000 <= new_score and new_score < 1500:
                    tiers[0] += 1
                elif 1500 <= new_score and new_score < 2000:
                    tiers[1] += 1
                elif 2000 <= new_score and new_score < 2500:    
                    tiers[2] += 1
                elif 2500 <= new_score and new_score < 3000:    
                    tiers[3] += 1
                else:
                    tiers[4] += 1
print(tiers)