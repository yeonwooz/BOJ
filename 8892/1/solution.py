import sys

def is_pal(word):
    n = len(word)
    half = n // 2
    i = 0
    while i < half:
        if word[i] != word[n - 1 - i]:
            return False
        i += 1
    return True


def main():
    T = int(sys.stdin.readline())
    for _ in range(T):
        palindrome_found = False
        k = int(sys.stdin.readline())
        words = []
        for _ in range(k):
            words.append(sys.stdin.readline().rstrip())

        for i in range(len(words)):
            for j in range(len(words)):
                if i != j and palindrome_found == False:
                    merged = words[i] + words[j]
                    if (is_pal(merged)):
                        palindrome_found = True
                        print(merged)
                        break
        
        if palindrome_found == False:
            print("0")

if __name__ == "__main__":
    main()