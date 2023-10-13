# Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

# Return as a number.

def div_con(x):
    result = 0
    for char in x:
        if isinstance(char, int):
            result += char
        else:
            result -= int(char)
    return result
