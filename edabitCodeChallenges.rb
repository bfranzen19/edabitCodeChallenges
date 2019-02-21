### profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

def less_than_or_equal_to_zero(num)
	if num <= 0
		return true
	else
	  	return false
    end
end

### tests
Test.assert_equals(less_than_or_equal_to_zero(5), false)
Test.assert_equals(less_than_or_equal_to_zero(0), true)
Test.assert_equals(less_than_or_equal_to_zero(-5), true)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of numbers. Return the largest number in the array.

def find_largest_num(nums)
	return nums.max
end

### tests
Test.assert_equals(find_largest_num([4, 5, 1, 3]), 5)
Test.assert_equals(find_largest_num([13, 27, 18, 26]), 27)
Test.assert_equals(find_largest_num([32, 35, 37, 39]), 39)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two numbers as arguments and return their sum.

def addition(a, b)
  	return a+b
end


### tests
Test.assert_equals(addition(2,3), 5)
Test.assert_equals(addition(-3,-6), -9)
Test.assert_equals(addition(7,3), 10)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that accepts an array and returns the last item in the array. The array can be either homogeneous or heterogeneous.

def get_last_item(arr)
	return arr.last
end

### tests
Test.assert_equals(get_last_item(['Cat', 'Dog', 'Duck']), 'Duck')
Test.assert_equals(get_last_item([1, 2, 3]), 3)
Test.assert_equals(get_last_item([true, false, false, true]), true)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of numbers and returns the smallest number in the array.

def find_smallest_num(arr)
	return arr.min
end

### tests
Test.assert_equals(find_smallest_num([34, 15, 88, 2]), 2)
Test.assert_equals(find_smallest_num([34, -345, -1, 100]), -345)
Test.assert_equals(find_smallest_num([-76, 1.345, 1, 0]), -76)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
=begin Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
Sort numbers array in ascending order.
If function's argument is an empty array, return an empty array.
Return a new array of sorted numbers. =end

def sort_nums_ascending(arr)
	return arr.sort
end

### tests
Test.assert_equals(sort_nums_ascending([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
Test.assert_equals(sort_nums_ascending([80, 29, 4, -95, -24, 85]), [-95, -24, 4, 29, 80, 85])
Test.assert_equals(sort_nums_ascending([]), [])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
# Create a function that takes a base number and an exponent number and returns the calculation.

def calculate_exponent(num, exp)
	return num**exp
end

# tests
Test.assert_equals(calculate_exponent(5,5), 3125)
Test.assert_equals(calculate_exponent(3,3), 27)
Test.assert_equals(calculate_exponent(10,10), 10000000000)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument and returns the amount of digits it has.

def find_digit_amount(num)
	s = num.to_s
  	return s.length
end

### tests
Test.assert_equals(find_digit_amount(1), 1, 'Should work with one digit')
Test.assert_equals(find_digit_amount(67), 2, 'Should work with a two-digit number')
Test.assert_equals(find_digit_amount(123), 3, 'Should work with a three-digit number')

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that accepts an array of numbers and return both the minimum and maximum numbers, in that order (as an array).

def min_max(nums)
	ret = [nums.min, nums.max]
  	return ret
end

### tests
Test.assert_equals(min_max([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assert_equals(min_max([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assert_equals(min_max([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Given an array of numbers, write a function that returns an array that...
### Has all duplicate elements removed.
### Is sorted from least value to greatest value.

def unique_sort(arr)
	arr = arr.uniq.sort
  	return arr
end

### tests
Test.assert_equals(unique_sort([1, 5, 8, 2, 3, 4, 4, 4, 10]), [1, 2, 3, 4, 5, 8, 10])
Test.assert_equals(unique_sort([1, 2, 5, 4, 7, 7, 7]), [1, 2, 4, 5, 7])
Test.assert_equals(unique_sort([7, 6, 5, 4, 3, 2, 1, 0, 1]), [0, 1, 2, 3, 4, 5, 6, 7])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument, increments the number by +1 and returns the result.

def addition(num)
	return num + 1
end

### tests
Test.assert_equals(addition(2), 3)
Test.assert_equals(addition(-9), -8)
Test.assert_equals(addition(0), 1)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of elements and return the first and last elements as a new array.

def first_last(arr)
	newArr = Array.new
  	newArr.push(arr.first, arr.last)
  	return newArr
end

### tests
Test.assert_equals(first_last([5, 10, 15, 20, 25]), [5, 25])
Test.assert_equals(first_last(["edabit", 13, nil, false, true]), ["edabit", true])
Test.assert_equals(first_last([nil, 4, "6", "hello", nil]), [nil, nil])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

def comp(str1, str2)
	if str1.length === str2.length
		return true
	else
	  	return false
	end
end

### tests
Test.assert_equals(comp("AB", "CD"), true)
Test.assert_equals(comp("ABC", "DE"), false)
Test.assert_equals(comp("hello", "edabit"), false)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a string and returns the word count. The string will be a sentence.

def count_words(str)
	arr = str.split
  	return arr.count
end

### tests
Test.assert_equals(count_words("It's high noon"), 3)
Test.assert_equals(count_words("Is this easy mode"), 4)
Test.assert_equals(count_words("Is this easy mode"), 4)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

def is_even_or_odd(num)
	if num % 2 != 0
	  return 'odd'
	else
	  return 'even'
	end
end

### tests
Test.assert_equals(is_even_or_odd(3), "odd")
Test.assert_equals(is_even_or_odd(0), "even")
Test.assert_equals(is_even_or_odd(7), "odd")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a string and returns the word count. The string will be a sentence.

def count_words(str)
	arr = str.split
  	return arr.count
end

### tests
Test.assert_equals(count_words("It's high noon"), 3)
Test.assert_equals(count_words("Is this easy mode"), 4)
Test.assert_equals(count_words("Is this easy mode"), 4)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function to multiply all values in an array by the amount of values in that array.

def multiply_by_length(arr)
	y = arr.count
  	return arr.map{|x| x * y}
end

### tests
Test.assert_equals(multiply_by_length([2,6,4,9]), [8,24,16,36])
Test.assert_equals(multiply_by_length([4,1,1]), [12,3,3])
Test.assert_equals(multiply_by_length([1,0,3,3,7,2,1]), [7,0,21,21,49,14,7])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array and a string as arguments and return the index of the string.

def find_index(arr, str)
	return arr.index(str)
end

### tests
Test.assert_equals(find_index(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3)
Test.assert_equals(find_index(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5)
Test.assert_equals(find_index(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a string (will be a persons first and last name) and returns a string with the first and last name swapped.

def name_shuffle(str)
	arr = str.split.reverse.join(' ')
  	return arr
end

### tests
Test.assert_equals(name_shuffle("Donald Trump"),"Trump Donald")
Test.assert_equals(name_shuffle("Rosie O'Donnel"),"O'Donnel Rosie")
Test.assert_equals(name_shuffle("Seymour Butts"),"Butts Seymour")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a string and returns a string with its letters in alphabetical order.

def alphabet_soup(str)
	arr = str.split(//)
  	arr.sort!
	return arr.join
end

### tests
Test.assert_equals(alphabet_soup("hello"), "ehllo")
Test.assert_equals(alphabet_soup("edabit"), "abdeit")
Test.assert_equals(alphabet_soup("hacker"), "acehkr")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests

























#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
