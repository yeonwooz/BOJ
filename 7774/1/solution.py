import sys
input = sys.stdin.readline

n, m = map(int, input().split())  
a_tabs = list(map(int, input().split()))
b_tabs = list(map(int, input().split()))
a_tabs.sort(reverse=True) #가장 구멍이 많은 것부터 연결
b_tabs.sort(reverse=True) # 각각의 소켓개수를 가진 b_tabs를 최대화. 가장 구멍이 많은 것부터 연결

cur_atab_idx = 0
cur_btab_idx = 0
hole_cnts = 0
max_hole_cnts = 0
while True:
    if cur_atab_idx == n or cur_btab_idx == m: 
        break
    
    for _ in range(a_tabs[cur_atab_idx]):
        #각 A타입 멀티탭의 구멍개수만큼
        if cur_btab_idx >= m: 
            continue
        hole_cnts += b_tabs[cur_btab_idx]
        max_hole_cnts = max(max_hole_cnts, hole_cnts)
        cur_btab_idx += 1

    if hole_cnts > 0:
        cur_atab_idx += 1
        hole_cnts -= 1

max_hole_cnts = max(max_hole_cnts, hole_cnts)
print(max_hole_cnts)