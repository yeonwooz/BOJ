def is_leay_year(year):
    if year % 4 == 0:
        if year % 100 > 0 or year % 400 == 0:
            return True
    return False

year = int(input())

if is_leay_year(year):
    print(1)
else:
    print(0)
