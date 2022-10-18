import sys
input = sys.stdin.readline

n, m = map(int, input().split())  
a_tabs = list(map(int, input().split()))
b_tabs = list(map(int, input().split()))
a_tabs.sort(reverse=True) #가장 구멍이 많은 것부터 연결
b_tabs.sort(reverse=True) # 각각의 소켓개수를 가진 b_tabs를 최대화. 가장 구멍이 많은 것부터 연결

cnt = 0
answer = 0
for hole in range(a_tabs[0]):
    if cnt == m:
        break
    answer += b_tabs[cnt]
    cnt += 1

print(answer)
