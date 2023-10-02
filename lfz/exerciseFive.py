# 1. Write a function named "letters_to_symbols" that will take one
# parameter, a string named 's'
# 2. The function will encode the string so that the amount of letters
# will be represented by a number and the letter
# s = "AAAABBBCCDAAA"
# Example Output: "4A3B2C1D3A"

def letters_to_symbols(s):
  current_char = s[0]
  temp_str = ""
  s_split_on_nonrepeat = []
  result = ""

  for char in s:
    if char == current_char:
      temp_str += char
    else:
      s_split_on_nonrepeat.append(temp_str)
      temp_str = ""
      current_char = char
      temp_str += char
  s_split_on_nonrepeat.append(temp_str)

  for string in s_split_on_nonrepeat:
    result += str(len(string))
    result += string[0]
  print(result)

letters_to_symbols("AAAABBBCCDAAA")
