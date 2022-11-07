from sys import stdin
N = int(stdin.readline())

total = 5
arr = []
for i in range(N):
    arr.append(int(stdin.readline()))

for i in range(N):
    cnt1=4
    cnt2=4
    for j in range(N):
        if 0 < arr[j] - arr[i] < 5:
            #앞이 뒤보다 작고 차이가 5미만
            cnt1-=1
        elif 0 < arr[i] - arr[j] < 5:
            # 앞이 뒤보다 크고 차이가 5미만
            cnt2-=1
    total = min(total, cnt1, cnt2)
print(total)
      