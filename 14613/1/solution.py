import sys
from math import comb

W, L, D = map(float, sys.stdin.readline().split())

cur = 2000
tiers_prob = [0] * 5

for win in range(21):
    for lose in range(21 - win):
        score = cur + 50 * win - 50 * lose
        prob = W ** win * L ** lose * D ** (20 - win - lose) * comb(20, win) * comb(20 - win, lose)

        if 1000 <= score < 1500: tiers_prob[0] += prob
        elif 1500 <= score < 2000: tiers_prob[1] += prob
        elif 2000 <= score < 2500: tiers_prob[2] += prob
        elif 2500 <= score < 3000: tiers_prob[3] += prob
        elif 3000 <= score < 3500: tiers_prob[4] += prob

# print("\n".join(str(round(s, 8)) for s in tiers_prob))
for prob in tiers_prob:
    print(f"{prob:.8f}")