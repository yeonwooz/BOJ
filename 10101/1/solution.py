#started at 2:34
arr = []
for i in range(3):
    arr.append(int(input()))

a,b,c = arr

answer = ''
if a == b == c == 60:
    answer = 'Equilateral'
elif a + b + c == 180:
    if a == b or b == c or a == c:
        answer = 'Isosceles'
    else:
        answer = 'Scalene'
else:
    answer = 'Error'
print(answer)