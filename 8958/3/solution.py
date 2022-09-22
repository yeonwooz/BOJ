T = int(input())
for i in range(0, T):
    str = input()
    score = 0
    sum = 0
    for j in range(0, len(str)):
        if str[j] == 'X':
            sum = 0
        else:
            sum = sum + 1
        score = score + sum
    print(score)