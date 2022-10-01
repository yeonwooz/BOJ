#started at 2:12
import sys
global pairs
pairs = {
    '(':')',
    '[':']'
}

def validate(pars):
    stack = []
    top = -1
    # print(pars)
    for i in range(len(pars)):
        if pars[i] == '(' or pars[i] == '[':
            stack.append(pars[i])
            top += 1
        else: 
            if top == -1:
                # print("====1====")
                return False
            
            if pars[i] == ')' and pars[i-1] == '[' or pars[i] == ']' and pars[i-1] =='(':
                # print("====2====")
                return False
            
            stack.append(pars[i])
            top += 1
    return top % 2 == 0 # 하나 더 올라간 채로 끝나기 때문에

def calc(pars, cnt):
    if len(pars) == 0:
        return cnt
    if pars[0] in pairs and pairs[pars[0]] == pars[-1]:
        if pars[0] == '(':
            cnt *= 2
        else:
            cnt *= 3
        pars.pop(0)
        pars.pop()
        return calc(pars, cnt)
    else:
        for i in range(len(pars)):
            for j in range(i + 1, len(pars)):
                sliced = pars[i:j]
                if validate(sliced):
                    sum = calc(sliced, cnt) + calc(pars[j:], 1)
                    return cnt * sum
    return cnt

def solve(pars):
    is_valid = validate(pars)
    if is_valid == False:
        return 0
    # return calc(pars.split(''), 1) # 구분자가 이미 문장 내에 존재할 때만 split 활용가능
    arr = list(pars)
    arr.pop()
    return calc(arr, 1)

if __name__ == "__main__":
    pars = sys.stdin.readline()
    print(solve(pars))


#finished at 