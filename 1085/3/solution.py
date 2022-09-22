x,y,w,h = input().split()
x = int(x)
y = int(y)
w = int(w)
h = int(h)

distances = [x,y,w-x, h-y]

print(min(distances))