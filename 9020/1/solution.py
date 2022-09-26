import math

def is_prime(num: int):
    if num == 1:
        return False
    elif num == 2:
        return True
    else:
        divisor = 2
        while divisor * divisor <= num:
            if num % divisor == 0:
                return False
            divisor += 1
        return True

def get_gb_parts(n: int):
    list = []
    possible_x = math.floor(n / 2)
    while possible_x * 2 > 0:
        if is_prime(possible_x) and is_prime(n - possible_x) > 0:
            x = possible_x
            y = n - x
            diff = abs(x - y)
            list.append([diff, x, y])
            break
        possible_x -= 1
    return list

T = int(input())

for i in range(0, T):
    n = int(input())
    partitions = get_gb_parts(n)
    min_diff = n
    part = []
    for part in partitions:
        if part[0] < min_diff:
            min_diff = part[0]
            part = [part[1], part[2]]
    answer = ''
    for num in part:
        answer += str(num) + ' '

    print(answer)