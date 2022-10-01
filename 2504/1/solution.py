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

def calc(pars):
    global calculated, pairs

    if len(pars) == 0:
        return

    if pars[0] in pairs and pairs[pars[0]] == pars[-1]:
        if pars[0] == '(':
            calculated *= 2
        else:
            calculated *= 3
        pars.pop(0)
        pars.pop()
        calc(pars)
    else:
        for i in range(len(pars)):
            for j in range(i + 1, len(pars)):
                sliced = pars[i:j]
                if validate(sliced):
                    calc(sliced)
                    calc(pars[j:])

def solve(pars):
    is_valid = validate(pars)
    if is_valid == False:
        return 0
    global calculated    
    calculated = 1
    calc(pars.split())
    return calculated

if __name__ == "__main__":
    pars = sys.stdin.readline()
    print(solve(pars))


#finished at 