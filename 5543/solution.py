a = int(input())
b = int(input())
c = int(input())
coke = int(input())
cider = int(input())

burger = min(a,b,c)
liq = min(coke, cider)
print(burger + liq - 50)