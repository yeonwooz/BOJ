T = int(input())
for i in range(0, T):
    R, str = input().split()
    R = int(R)
    answer = ''
    for cha in str:
        for j in range(0, R):
            answer += cha
    print(answer)