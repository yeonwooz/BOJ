sep_line = 4

def rec(original_N: int, cur_N: int):
    order = original_N - cur_N
    seperator = ""
    for i in range(0, sep_line * order):
        seperator += '_'

    if cur_N == 0:
        print(seperator + '"재귀함수가 뭔가요?"')
        print(seperator + '"재귀함수는 자기 자신을 호출하는 함수라네"')
        print(seperator + '라고 답변하였지.')
        return
        
    print(seperator + '"재귀함수가 뭔가요?"')
    print(seperator + '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.')
    print(seperator + '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.')
    print(seperator + '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."')
    rec(original_N, cur_N-1)
    print(seperator + '라고 답변하였지.')

N =  int(input())
print("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.")
rec(N, N)
