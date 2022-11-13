# Solution

def bmi(weight, height):
    #your code here
    index = weight / (height**2)
    if index <= 18.5:
        return "Underweight"
    elif index <= 25:
        return "Normal"
    elif index <= 30:
        return "Overweight"
    else:
        return "Obese"