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

def calc(pars_arr, cnt):
    if len(pars_arr) == 0:
        # 문제 조건 상 맨 처음에 길이가 0인 경우는 없다 
        return cnt 
    if pars_arr[0] in pairs and pairs[pars_arr[0]] == pars_arr[-1]:
        if pars_arr[0] == '(':
            cnt *= 2
        else:
            cnt *= 3
        pars_arr.pop(0)
        pars_arr.pop()
        return calc(pars_arr, cnt)

    for i in range(len(pars_arr)):
        sliced = pars_arr[:i]
        if validate(sliced):
            sum = calc(sliced, cnt) + calc(pars_arr[i:], cnt)
            cnt *= sum
            return cnt
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