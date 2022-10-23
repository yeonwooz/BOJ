from enum import Enum
class Department(Enum):
    S = 'Senior'
    J = 'Junior'

while True:
    try:
        name, age, w = input().split()
        if name == '#' and age == '0' and w == '0':
            break
        department = Department.J.value
        if int(age) > 17 or int(w) >= 80:
            department = Department.S.value

        print(f"{name} {department}")
    except Exception as e:
        print(e)
        break