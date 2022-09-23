import statistics

C = int(input())
for i in range(0, C):
    lines = list(map(int , input().split()))
    N = lines[0]
    scores = lines[1:]
    avg = statistics.mean(scores)
    # print(avg)
    higer_score_cnt = 0
    for score in scores:
        if score > avg:
            higer_score_cnt += 1
    ratio = higer_score_cnt / N * 100
    print("%.3f"%ratio+"%")