# 1. Write a function named "BracketMatcher" that takes one
# parameter, a string named "s" (defined below)
# 2. The function should return True if the brackets are correctly
# matched and each bracket is matched and False if they aren't
# s = '(a((kl(mns)t)uvwz)'
# Example Output: 0

s = '(a((kl(mns)t)uvwz)'
count_open = 0
count_close = 0

for char in s:
  if char == '(':
    count_open += 1
  elif char == ')':
    count_close += 1

return count_open == count_close
