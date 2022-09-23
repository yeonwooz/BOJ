n = int(input())
k = int(input())

cards = []
for i in range(n):
    cards.append(int(input()))

def make_num(num_str, visited, numset):
    if len(visited) == k:
        if num_str not in numset:
            numset.add(num_str)
        return
    else:
        for idx in range(0, len(cards)):
            if idx not in visited:
                visited.append(idx)
                make_num(num_str + str(cards[idx]), visited, numset)
                visited.pop()

numset = set()
visited = []
num_str = ''

for idx in range(0, len(cards)):
    if idx not in visited:
        # 시작점
        num_str = str(cards[idx])
        visited.append(idx)
        make_num(num_str, visited, numset)
        visited = []
        num_str = ''

print(len(numset))