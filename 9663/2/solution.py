N = int(input())

queens = [-1] * N
global cnt
cnt = 0
# board = []

# for i in range(N):
#     board.append([-1] * N)

def promising(queens, v, i):
    # v열 i행에 퀸을 놓을 수 있나?
    # 상하좌우 대각선에 없다면 true
    promising = False
    if queens[v] == -1:
        left_candidate = None
        right_candidate = None
        
        if v > 0:
            # 현재열이 1이상이어야 왼쪽에 후보가 있다
            left_candidate = queens[v - 1]
            
        if v < len(queens) - 1:
            # 현재열이 마지막인덱스보다 작아야 오른쪽에 후보가 있다
            right_candidate = queens[v + 1]

            # 이 열이 비어있고
            # 양옆의 숫자와 2이상 차이나면 (diff 절댓값) promising = True
        if left_candidate is None and right_candidate is not None:
            if abs(right_candidate - i) >= 2:
                promising = True
        elif left_candidate is not None and right_candidate is None:
            if abs(left_candidate - i) >= 2:
                promising = True
        elif ((left_candidate is not None and abs(left_candidate - i) >= 2) and (right_candidate is not None and abs(right_candidate - i) >= 2)):
            promising = True

    return promising

def recur(N, queens, v):
    # v열을 채워보자. 몇행에 퀸을 놓을까?
    if -1 not in queens:
        print(queens)
        return
    
    for i in range(N):
        if i not in queens and promising(queens, v, i):
            # v열의 i행에 놓을 수 있다면?
            queens[v] = i
            for j in range(N):
                # 그 다음에 어떤 열을 채울지?
                if v != j:
                    recur(N, queens, j)
    return


queens = [-1] * N # -1이 없을 때까지 채우기
# for i in range(N):
#     # i열부터 채우기 시작하는 케이스
#     recur(N, queens, i)
#     queens = [-1] * N
recur(N, queens, i)