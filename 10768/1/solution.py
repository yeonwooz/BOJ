m = int(input())
d = int(input())

def sol(m, d):
    if m > 2:
        return "After"
    if m < 2: 
        return  "Before"
    if m == 2:
        if d == 18:
            return "Special"
        if d > 18: 
            return "After"
        return  "Before"
    
print(sol(m,d))

