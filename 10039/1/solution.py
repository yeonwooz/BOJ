scores = []
for i in range(5):
    scores.append(max(int(input()), 40))

print(sum(scores) // 5)
