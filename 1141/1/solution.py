#started at 10:31
n = int(input())

# wordset = set()
words = []
for _ in range(n):
    words.append(input().rstrip())

# words = list(wordset)
words.sort(key=len)

def is_prefix(stra,strb):
    # a가 더 짧음
    cnt = 0
    for i in range(len(stra)):
        if stra[i] != strb[i]:
            break
        cnt +=1
    return cnt == len(stra)
answer = 0
# removeset = set()
for i in range(len(words)):
    flag = False
    for j in range(i+1, len(words)):
        if  words[j].startswith(words[i]):
            flag = True
            break
# 끝에서부터 탐색해서 지워야할듯

    if not flag:
        answer += 1
print(answer)
# 같은 완전단어라면 둘이 서로의 접두사라서 카운트에서 빠질 것이고
# 같은 접두사단어라면, 둘다 다른 단어의 접두사라서 카운트되어 빠질 것이다 