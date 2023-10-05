# The marketing team is spending way too much time typing in hashtags.
# Let's help them with our own Hashtag Generator!

# Here's the deal:

# It must start with a hashtag (#).
# All words must have their first letter capitalized.
# If the final result is longer than 140 chars it must return false.
# If the input or the result is an empty string it must return false.
# Examples
# " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
# "    Hello     World   "                  =>  "#HelloWorld"
# ""                                        =>  false
def generate_hashtag(s):
    result = "#"
    if s == '':
        return False
    else:
        for i in range(len(s)):
            if s[i].isalpha():
                if i == 0 or s[i - 1] == " ":
                    result += s[i].upper()
                else:
                    result += s[i].lower()
    if len(result) > 140:
        return False
    else:
        return result
