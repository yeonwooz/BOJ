import sys

def is_asc(str1, str2):
    return str1.lower() < str2.lower()   # str1이 더 앞선다 

def q_sort(ls, left, right):
    pl = left
    pr = right
    pivot = ls[(left + right) // 2]

    while pl <= pr:
        while is_asc(ls[pl], pivot):
            pl += 1
        while is_asc(pivot, ls[pr]):
            pr -= 1
        if pl <= pr:
            ls[pl], ls[pr] = ls[pr], ls[pl]
            pl += 1
            pr -= 1
    
    if left < pr : q_sort(ls, left, pr)
    if pl < right : q_sort(ls, pl, right)

def solve(words):
    q_sort(words, 0, len(words) - 1)
    print(words[0])
    return

if __name__ == "__main__":
    while True:
        try:
            n = int(sys.stdin.readline())
            words = []
            for i in range(n):
                words.append(sys.stdin.readline().rstrip())
            if (n > 0):
                solve(words)
        except:
            break