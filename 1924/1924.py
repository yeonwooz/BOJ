import sys

days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day_names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
def solve(x, y):
    day_cnt = y
    for i in range(x-1):
       day_cnt += days[i] 
    day_name = day_names[day_cnt % 7]
    print(day_name)
    
if __name__ == "__main__":
    x, y = map(int, sys.stdin.readline().split())
    solve(x, y)