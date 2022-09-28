import sys

def is_pal(word):
    if word == word[::-1]:
        return True
    return False

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