#started at 11:12
import sys

def validate(pars):
    top = -1
    for par in pars:
        if par == ')':
            if top == -1:
                return False
            top -= 1
        else:
            top += 1
    return top == 0


if __name__ == "__main__":
    T = int(sys.stdin.readline())
    for _ in range(T):
        pars = sys.stdin.readline()
        print('YES' if validate(pars) else 'NO')

#finished at 11:17