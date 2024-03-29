# Acknowledgments:
# I thank yvonne-liu for the idea and for the example tests :)

# Description:
# Encrypt this!

# You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

# Your message is a string containing space separated words.
# You need to encrypt each word in the message using the following rules:
# The first letter must be converted to its ASCII code.
# The second letter must be switched with the last letter
# Keepin' it simple: There are no special characters in the input.
# Examples:
# encrypt_this("Hello") == "72olle"
# encrypt_this("good") == "103doo"
# encrypt_this("hello world") == "104olle 119drlo"

def encrypt_this(text):
    result = []
    for word in text.split():
        if len(word) == 1:
            word = str(ord(word))
        elif len(word) == 2:
            word = str(ord(word[0])) + word[1]
        else:
            word = str(ord(word[0])) + word[-1] + word[2:-1] + word[1]
        result.append(word)
    return " ".join(result)
