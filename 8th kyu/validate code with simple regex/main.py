import re
def validate_code(code):
    print(code)
    n2s = str(code)
    print(type(n2s))
    regex = re.compile(r'\d')
    match = regex.search(n2s)
    if match.group() == '1':
        return True
    elif match.group() == '2':
        return True
    elif match.group() == '3':
        return True
    else:
        return False