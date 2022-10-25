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
        if is_prefix(words[i], words[j]):
            flag = True
            break
# 끝에서부터 탐색해서 지워야할듯
# for idx in removeset:
#     print(idx)
#     if words[]
    if not flag:
        answer += 1
print(answer)