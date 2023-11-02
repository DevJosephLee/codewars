# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))(("
# Notes
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

import numpy as np

def duplicate_encode(word):
    u, c = np.unique([*word.lower()], return_counts=True)
    dup = "".join(char for char in u[c > 1])
    result = ""
    for character in word:
        if character.lower() in dup:
            result += ")"
        else:
            result += "("
    return result
