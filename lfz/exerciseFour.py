# 1. Write a fucntion named "is_anagram" that takes two parameters, a string
# named "str1" and a string named "str2"
# 2. The function should return True if the words are anagrams of one another, and
# False if they are not
# str1 = 'cautioned'          str1 = 'cat'
# str2 = 'education'          str = 'rat'
# Example Output: True        Example Output: False

def is_anagram(str1, str2):
  print("".join(sorted(str1)) == "".join(sorted(str2)))

is_anagram('cautioned' , 'education')
