import math
A, B, V = list(map(int, input().split()))

distance = A - B

days = 0
perday = (V-A) / distance
if math.floor(perday) == perday:
    days = math.floor(perday)
else:
    days += math.floor(perday) + 1
print(days + 1)