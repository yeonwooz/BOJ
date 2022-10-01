#started at 11:39
import sys

def validate(pars):
    stack = []
    top = -1
    r_par_cnt = 0
    s_par_cnt = 0
    for par in pars:
        if par == '(':
            stack.append('(')
            top += 1
            r_par_cnt += 1
        elif par == ')':
            if top == -1 or top % 2 == 1:
                return False
            if r_par_cnt % 2 == 0:
                return False
            stack.append(')')
            top += 1
            r_par_cnt += 1
        elif par == '[':
            stack.append('[')
            top += 1
            r_par_cnt += 1
        else:
            if top == -1 or top % 2 == 1:
                return False
            if s_par_cnt % 2 == 0:
                return False
            stack.append(')')
            top += 1
            s_par_cnt += 1


#finished at 