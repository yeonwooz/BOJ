import sys
# TODO: 양옆도 달라야 함. 완전히 삼등분 되어야 함
def main(pic):
    # 가운데 중에서 최소 개수 알파벳

    #가로 두줄 : 2 3행
    alphabets = dict()
    for row in range(2, 4):
        for col in range(9):
            if alphabets.get(pic[row][col]):
                alphabets[pic[row][col]] += 1
            else:
                alphabets[pic[row][col]] = 1

    min_sum = 1e9
    max_cnt = -1e9
    max_key = None
    for key, value in alphabets.items():
        if max_cnt < value:
            max_cnt = value
            max_key = key
    sum = 0
    for key, value in alphabets.items():
        if key != max_key:
            sum += value
    min_sum = sum

    # 세로두줄 : 3 4 5열
    alphabets = dict()
    for col in range(3, 6):
        for row in range(6):
            if alphabets.get(pic[row][col]):
                alphabets[pic[row][col]] += 1
            else:
                alphabets[pic[row][col]] = 1

    max_cnt = -1e9
    max_key = None
    for key, value in alphabets.items():
        if max_cnt < value:
            max_cnt = value
            max_key = key
    sum = 0
    for key, value in alphabets.items():
        if key != max_key:
            sum += value
    min_sum = min(min_sum, sum)
    print(min_sum)

if __name__ == "__main__":
    pic = []
    for _ in range(6):
        row = sys.stdin.readline().rstrip()
        pic.append(row)
    main(pic)
