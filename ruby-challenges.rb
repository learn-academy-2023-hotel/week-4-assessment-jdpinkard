# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# Pseudo code:
# input: a number
# output: number is odd or even
# create a def method that takes in a number
# create a conditional statement resolving if number is odd or not
# return string with the number and if it is odd or not

reposts1 = 7 # Expected output: '7 is odd'
reposts2 = 42 # Expected output: '42 is even'
reposts3 = 221 # Expected output: '221 is odd'

def is_it_odd (number)
    if number.odd?
        "#{number} is odd"
    else
        "#{number} is even"
    end
end

p is_it_odd(reposts1) # "7 is odd"
p is_it_odd(reposts2) # "42 is even"
p is_it_odd(reposts3) # "221 is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Pseudo code:
# input: a string
# output: a string without vowels
# create a def method that takes in a string
# Use .delete method to remove vowels (This was an amazing find. I intended to do this another way, but .delete is amazing!)

beatles_album1 = 'Rubber Soul' # Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper' # Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road' # Expected output: 'bby Rd'

def removes_vowels (string)
    string.delete 'aeiouAEIOU'
end

p removes_vowels(beatles_album1) # "Rbbr Sl"
p removes_vowels(beatles_album2) # "Sgt Pppr"
p removes_vowels(beatles_album3) # "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# Pseudo code:
# input: a string
# output: a string is a palindrome or not
# create a def method taking in a string
# create a conditional statement resolving if the string is the same in reverse
# apply .downcase to ensure strings are equally compared
# return a string stating if the word is a palindrome or not

palindrome_test_case1 = 'Racecar' # Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN' # Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator' # Expected output: 'Rotator is a palindrome'

def palindrome_test (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end
end

p palindrome_test(palindrome_test_case1) # "Racecar is a palindrome."
p palindrome_test(palindrome_test_case2) # "LEARN is not a palindrome."
p palindrome_test(palindrome_test_case3) # "Rotator is a palindrome."