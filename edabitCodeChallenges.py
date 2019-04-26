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
###



### tests








































#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
