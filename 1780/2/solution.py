#started at 10:32

n = int(input())
board = []
for i in range(n):
    row = list(map(int, input().split()))
    board.append(row)

minus_one_cnt = 0
zero_cnt = 0
one_cnt = 0

def recur(start_i, start_j, len):
    global minus_one_cnt, zero_cnt, one_cnt 
    type = board[start_i][start_j]
    if len == 1:
        if type == -1:
            minus_one_cnt += 1 
        elif type == 0:
            zero_cnt += 1
        elif type == 1:
            one_cnt += 1  
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
        if type == -1:
            minus_one_cnt += 1 
        elif type == 0:
            zero_cnt += 1
        elif type == 1:
            one_cnt += 1  
    else:
        new_len = len // 3
        recur(start_i, start_j, new_len)
        recur(start_i, start_j + new_len, new_len)
        recur(start_i, start_j + 2 * new_len, new_len)
        
        recur(start_i + new_len, start_j, new_len)
        recur(start_i + new_len, start_j + new_len, new_len)
        recur(start_i + new_len, start_j + 2 * new_len, new_len)

        recur(start_i + 2 * new_len, start_j, new_len)
        recur(start_i + 2 * new_len, start_j + new_len, new_len)
        recur(start_i + 2 * new_len, start_j + 2 * new_len, new_len)

recur(0,0,n)

print(minus_one_cnt)
print(zero_cnt)
print(one_cnt)
#finished at 10:56