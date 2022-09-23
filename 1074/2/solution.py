import math
def rec(top_num: int, r: int, c: int, cnt: int):
    if top_num == 1:
        if r % 2 == 0 and c % 2 == 0:
            cnt += 0
        elif r % 2 == 0 and c % 2 > 0:
            cnt += 1
        elif r % 2 > 0 and c % 2 == 0:
            cnt += 2
        else:
            cnt += 3
        print(f"{cnt:.0f}")
        return

    side_len = math.floor(math.pow(2, top_num))
    quarter_space = (side_len / 2) * (side_len / 2)

    if r < side_len / 2 and c >= side_len / 2:
        cnt += quarter_space
        # 오른쪽 위
        c -= side_len / 2
    elif r >= side_len / 2 and c < side_len / 2:
        cnt += 2 * quarter_space
        # 왼쪽 아래
        r -= side_len / 2
    elif r >= side_len / 2 and c >= side_len / 2:
        cnt += 3 * quarter_space
        # 오른쪽 아래 
        r -= side_len / 2
        c -= side_len / 2
    rec(top_num - 1, r, c, cnt)       

N, r, c = list(map(int, input().split()))
rec(N, r, c, 0)