# Solution

def whatday(num):
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    if num == 1:
        return days[0]
    if num == 2:
        return days[1]
    if num == 3:
        return days[2]
    if num == 4:
        return days[3]
    if num == 5:
        return days[4]
    if num == 6:
        return days[5]
    if num == 7:
        return days[6]
    if num > 7 or num <= 0:
        return 'Wrong, please enter a number between 1 and 7'