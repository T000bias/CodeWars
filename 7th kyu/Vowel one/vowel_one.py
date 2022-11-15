# Solution

def vowel_one(s):
    lowercase = s.lower()
    binary = ''
    for i in lowercase:
        print(i)
        if i == 'a':
            binary = binary + '1'
        elif i == 'e':
            binary = binary + '1'
        elif i == 'i':
            binary = binary + '1'
        elif i == 'o':
            binary = binary + '1'
        elif i == 'u':
            binary = binary + '1'
        else:
            binary = binary + '0'
    return binary