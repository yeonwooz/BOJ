n = int(input())
board = []
for i in range(n):
    row = list(map(int, input().split()))
    board.append(row)

answer = {-1:0, 0:0, 1:0}

def recur(start_i, start_j, len):
    type = board[start_i][start_j]
    if len == 1:
        answer[type] += 1 
        return
    cnt = 0
    isPure = True
    for i in range(start_i, start_i + len):
        for j in range(start_j, start_j + len):
            if board[i][j] == type:
                cnt += 1
            else:
                isPure = False
                break
        if isPure == False:
            break
        # For문을 하나만 빠져나오고, 외부 for문은 끝까지 도는 것 주의하기    

    if cnt == len ** 2:
        answer[type] += 1 
    else:
        new_len = len // 3
        for di in range(3):
            for dj in range(3):
                recur(start_i + di * new_len, start_j + dj * new_len, new_len)

recur(0,0,n)

for entry in enumerate(answer):
    print(answer[entry[1]])
#코드 개선 결과 코드라인은 짧아진 대신 시간이 500ms정도 증가