list = [6,4,3,7,1,9,8]

n = len(list)
for i in range(0, n):
    for j in range(n-1, i, -1): # 역순 탐색하려면 음수 간격을 지정 
        if list[i] > list[j]:
            list[i], list[j] = list[j], list[i]

print(list)
