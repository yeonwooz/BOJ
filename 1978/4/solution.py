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

N = int(input())
nums = list(map(int, input().split()))
    
cnt = 0
for num in nums:
    if is_prime(num):
        cnt +=1

print(cnt)