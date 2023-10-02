# 1. Write a function to create a dictionary of binary values of
# decimal of 0 to 15
# 2. The decimal number should be the key and the binary number
# should be the value
# Example Output: {"0";0000, "1":0001, "2":00100,.....}

dictionary = {}

def exerciseTwo():
  for num in range(16):
      dictionary[str(num)] = format(num, "04b")
  print(dictionary)

exerciseTwo()
