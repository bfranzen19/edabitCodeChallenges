### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function that takes the base and height of a triangle and return its area.

def tri_area(base, height):
	return (base * height) / 2

### tests
Test.assert_equals(tri_area(3, 2), 3)
Test.assert_equals(tri_area(5, 4), 10)
Test.assert_equals(tri_area(10, 10), 50)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that finds the maximum range of a triangles third edge. (side1 + side2) - 1 = maximum range of third edge.

def nextEdge(side1, side2):
	return (side1 + side2) - 1

### tests
Test.assert_equals(nextEdge(5, 4), 8)
Test.assert_equals(nextEdge(8, 3), 10)
Test.assert_equals(nextEdge(7, 9), 15)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if a string is empty and False otherwise.

def is_empty(s):
	return len(s) == 0

### tests
Test.assert_equals(is_empty(""), True)
Test.assert_equals(is_empty(" "), False)
Test.assert_equals(is_empty("            "), False)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument, increments the number by +1 and returns the result.

def addition(num):
	return num + 1

### tests
Test.assert_equals(addition(2), 3)
Test.assert_equals(addition(-9), -8)
Test.assert_equals(addition(0), 1)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two numbers as arguments and return their sum.

def addition(a, b):
	return a + b

### tests
Test.assert_equals(addition(2,3), 5)
Test.assert_equals(addition(-3,-6), -9)
Test.assert_equals(addition(7,3), 10)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write two functions:
	# to_int() : A function to convert a string to an integer.
	# to_str() : A function to convert an integer to a string.

def to_int(txt):
	return int(txt)

def to_str(num):
	return str(num)

### tests
Test.assert_equals(to_int("37"), 37)
Test.assert_equals(to_int("113"), 113)
Test.assert_equals(to_int("5"), 5)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function to concatenate two integer lists.

def concat(lst1, lst2):
	return lst1 + lst2

### tests
Test.assert_equals(concat([1, 3, 5], [2, 6, 8]), [1, 3, 5, 2, 6, 8])
Test.assert_equals(concat([7, 8], [10, 9, 1, 1, 2]), [7, 8, 10, 9, 1, 1, 2])
Test.assert_equals(concat([4, 5, 1], [3, 3, 3, 3, 3]), [4, 5, 1, 3, 3, 3, 3, 3])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if an integer is divisible by 5, and false otherwise.

def divisible_by_five(n):
	return n % 5 == 0

### tests
Test.assert_equals(divisible_by_five(7), False)
Test.assert_equals(divisible_by_five(5), True)
Test.assert_equals(divisible_by_five(15), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

def animals(chickens, cows, pigs):
	return chickens * 2 + (cows + pigs) * 4

### tests
Test.assert_equals(animals(5, 2, 8), 50)
Test.assert_equals(animals(3, 4, 7), 50)
Test.assert_equals(animals(1, 2, 3), 22)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
''' Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

To illustrate, profitable_gamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
'''

def profitable_gamble(prob, prize, pay):
	return prob * prize > pay

### tests
Test.assert_equals(profitable_gamble(0.2, 50, 9), True)
Test.assert_equals(profitable_gamble(0.9, 1, 2), False)
Test.assert_equals(profitable_gamble(0.9, 3, 2), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if an integer is divisible by 5, and false otherwise.

def divisible_by_five(n):
	return n % 5 == 0

### tests
Test.assert_equals(divisible_by_five(7), False)
Test.assert_equals(divisible_by_five(5), True)
Test.assert_equals(divisible_by_five(15), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a list of numbers. Return the largest number in the list.

def findLargestNum(nums):
	return max(nums)

### tests
Test.assert_equals(findLargestNum([4, 5, 1, 3]), 5)
Test.assert_equals(findLargestNum([13, 27, 18, 26]), 27)
Test.assert_equals(findLargestNum([32, 35, 37, 39]), 39)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Given two strings, first_name and last_name, return a single string in the format "last, first".

def concat_name(first_name, last_name):
	return last_name + ", " + first_name

### tests
Test.assert_equals(concat_name("John", "Doe"), "Doe, John")
Test.assert_equals(concat_name("First", "Last"), "Last, First")
Test.assert_equals(concat_name("A", "B"), "B, A")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a list of numbers and returns the smallest number in the list.

def findSmallestNum(lst):
	return min(lst)

### tests
Test.assert_equals(findSmallestNum([34, 15, 88, 2]), 2)
Test.assert_equals(findSmallestNum([34, -345, -1, 100]), -345)
Test.assert_equals(findSmallestNum([-76, 1.345, 1, 0]), -76)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function to reverse a list.

def reverse(lst):
	return lst[::-1]

### tests
Test.assert_equals(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
Test.assert_equals(reverse([5, 6, 7]), [7, 6, 5])
Test.assert_equals(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###  Create a function that takes an integer and returns True if it's divisible by 100, otherwise return False.

def divisible(num):
	return num % 100 == 0

### tests
Test.assert_equals(divisible(1), False)
Test.assert_equals(divisible(100), True)
Test.assert_equals(divisible(1000), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###  Create a function that takes a number as its only argument and returns True if it's less than or equal to zero, otherwise return False.

def lessThanOrEqualToZero(num):
	return num <= 0

### tests
Test.assert_equals(lessThanOrEqualToZero(5), False)
Test.assert_equals(lessThanOrEqualToZero(0), True)
Test.assert_equals(lessThanOrEqualToZero(-5), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###  Create a function that takes two strings as arguments and return either True or False depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

def comp(txt1, txt2):
	return len(txt1) == len(txt2)

### tests
Test.assert_equals(comp("AB", "CD"), True)
Test.assert_equals(comp("ABC", "DE"), False)
Test.assert_equals(comp("hello", "edabit"), False)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns the ASCII value of the passed in character.

def ctoa(char):
	return ord(char)

### tests
Test.assert_equals(ctoa(' '), 32)
Test.assert_equals(ctoa('A'), 65)
Test.assert_equals(ctoa(']'), 93)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function to check whether a list contains a particular element.

def check(lst, el):
	if el in lst:
		return True
	else:
		return False

'''
better solution:

def check(lst, el):
	return el in lst

'''

### tests
Test.assert_equals(check([1, 2, 3, 4, 5], 3), True)
Test.assert_equals(check([1, 1, 2, 1, 1], 3), False)
Test.assert_equals(check([1, 1, 2, 1, 5, 4, 7], 7), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

def is_plural(word):
	return word.endswith('s')

### tests
Test.assert_equals(is_plural("dudes"), True)
Test.assert_equals(is_plural("flowers"), True)
Test.assert_equals(is_plural("checks"), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### There is a single operator in Python capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.

def remainder(x, y):
	return x % y

### tests
Test.assert_equals(remainder(7, 2), 1)
Test.assert_equals(remainder(3, 4), 3)
Test.assert_equals(remainder(5, 5), 0)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a list and returns the difference between the smallest and biggest numbers.

def difference_max_min(lst):
	return max(lst) - min(lst)

### tests
Test.assert_equals(difference_max_min([10,4,1,2,8,91]), 90)
Test.assert_equals(difference_max_min([-70,43,34,54,22]), 124)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###  Create a function that takes a list of elements and return the first and last elements as a new list.

def first_last(lst):
	return [lst[0], lst[len(lst)-1]]

### tests
Test.assert_equals(first_last([5, 10, 15, 20, 25]), [5, 25])
Test.assert_equals(first_last(["edabit", 13, None, False, True]), ["edabit", True])
Test.assert_equals(first_last([None, 4, "6", "hello", None]), [None, None])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that returns True if a string contains any spaces.

def has_spaces(txt):
	return ' ' in txt

### tests
Test.assert_equals(has_spaces("Foo"), False)
Test.assert_equals(has_spaces("Foo bar"), True)
Test.assert_equals(has_spaces("Foo "), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that accepts a list and returns the last item in the list. The list can be either homogeneous or heterogeneous.

def getLastItem(lst):
	return lst[len(lst)-1]

### tests
Test.assert_equals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
Test.assert_equals(getLastItem([1, 2, 3]), 3)
Test.assert_equals(getLastItem([True, False, False, True]), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function that returns True if two arrays have the same number of unique elements, and false otherwise.

def same(a1, a2):
	s1 = set(a1)
	s2 = set(a2)

	return len(s1) == len(s2)

### tests
Test.assert_equals(same([1, 3, 4, 4, 4], [2, 5, 7]), True)
Test.assert_equals(same([9, 8, 7, 6], [4, 4, 3, 1]), False)
Test.assert_equals(same([2], [3, 3, 3, 3, 3]), True)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

def isEvenOrOdd(num):
	if num % 2 == 0:
		return "even"
	else:
		return "odd"

### tests
Test.assert_equals(isEvenOrOdd(3), "odd")
Test.assert_equals(isEvenOrOdd(0), "even")
Test.assert_equals(isEvenOrOdd(7), "odd")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that accepts a list of numbers and return both the minimum and maximum numbers, in that order (as a list).

def minMax(nums):
	return [min(nums), max(nums)]

### tests
Test.assert_equals(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assert_equals(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assert_equals(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function that returns True if a dictionary is empty, and False otherwise.

def is_empty(dictionary):
	return len(dictionary) == 0

### tests
Test.assert_equals(is_empty({}), True)
Test.assert_equals(is_empty({'a': 1}), False)
Test.assert_equals(is_empty({'z': 2, 'w': 4, 'y': 5}), False)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

def num_to_dashes(num):
	return "-" * num

### tests
Test.assert_equals(num_to_dashes(1),"-")
Test.assert_equals(num_to_dashes(2),"--")
Test.assert_equals(num_to_dashes(3),"---")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

def number_syllables(word):
	return len(word.split('-'))

### tests
Test.assert_equals(number_syllables("buf-fet"), 2)
Test.assert_equals(number_syllables("beau-ti-ful"), 3)
Test.assert_equals(number_syllables("mon-u-men-tal"), 4)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
































#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
