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
### Create a function that takes an array of numbers and returns only the even values.

def no_odds(arr)
	return arr.select {|x| x % 2 === 0}
end

### tests
Test.assert_equals(no_odds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8])
Test.assert_equals(no_odds([43, 65, 23, 89, 53, 9, 6]), [6])
Test.assert_equals(no_odds([718, 991, 449, 644, 380, 440]), [718, 644, 380, 440])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function to multiply all values in an array by the amount of values in that array.

def multiply_by_length(arr)
	len = arr.length
  	arr.collect { |x| x * len}
end

### tests
Test.assert_equals(multiply_by_length([2,6,4,9]), [8,24,16,36])
Test.assert_equals(multiply_by_length([4,1,1]), [12,3,3])
Test.assert_equals(multiply_by_length([1,0,3,3,7,2,1]), [7,0,21,21,49,14,7])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

def month_name(num)
	case num
	  when 1 then "January"
	  when 2 then "February"
	  when 3 then "March"
	  when 4 then "April"
	  when 5 then "May"
	  when 6 then "June"
	  when 7 then "July"
	  when 8 then "August"
	  when 9 then "September"
	  when 10 then "October"
	  when 11 then"November"
	  when 12 then "December"
	end
end

### tests
Test.assert_equals(month_name(1),	'January')
Test.assert_equals(month_name(2), 'February')
Test.assert_equals(month_name(3), 'March')

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Given two strings, first_name and last_name, return a single string in the format "last, first".

def concat_name(first_name, last_name)
	return last_name.concat(', ' + first_name)
end

### tests
Test.assert_equals(concat_name("John", "Doe"), "Doe, John")
Test.assert_equals(concat_name("First", "Last"), "Last, First")
Test.assert_equals(concat_name("A", "B"), "B, A")

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of strings and return an array, sorted from shortest to longest.

def sort_by_length(arr)
	return arr.sort_by {|word| word.length}
end

### tests
Test.assert_equals(sort_by_length(["Google", "Apple", "Microsoft"]), ["Apple", "Google", "Microsoft"])
Test.assert_equals(sort_by_length(["Leonardo", "Michelangelo", "Raphael", "Donatello"]), ["Raphael", "Leonardo", "Donatello", "Michelangelo"])
Test.assert_equals(sort_by_length(["Turing", "Einstein", "Jung"]), ["Jung", "Turing", "Einstein"])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

def divisible(num)
	if num.abs % 100 == 1
      return false
    else
      return true
    end
end

### tests
Test.assert_equals(divisible(1), false)
Test.assert_equals(divisible(100), true)
Test.assert_equals(divisible(1000), true)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two strings and returns true if the first argument ends with the second argument; otherwise return false.

def check_ending(str1, str2)
	if str1.end_with?(str2)
	  return true
	else
	  return false
	end
end

### tests
Test.assert_equals(check_ending("abc", "bc"), true)
Test.assert_equals(check_ending("abc", "d"), false)
Test.assert_equals(check_ending("samurai", "zi"), false)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes two strings and returns true if the first argument ends with the second argument; otherwise return false.

def check_ending(str1, str2)
	return str1.end_with?(str2)
end

### tests
Test.assert_equals(check_ending("abc", "bc"), true)
Test.assert_equals(check_ending("abc", "d"), false)
Test.assert_equals(check_ending("samurai", "zi"), false)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes an array of arrays with integers or floats. Return a new (single) array with the largest numbers from each.

def find_largest_nums(arr)
	return arr.map {|x| x.max}
end

### tests
Test.assert_equals(find_largest_nums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]), [7, 90, 2])
Test.assert_equals(find_largest_nums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]), [0.7634, 9.32, 9])
Test.assert_equals(find_largest_nums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function to remove all nil values from an array.

def remove_nil(arr)
	return arr.compact
end

### tests
Test.assert_equals(remove_nil(['a', nil, 'b', nil]), ['a', 'b'])
Test.assert_equals(remove_nil([nil, nil, nil, nil, nil]), [])
Test.assert_equals(remove_nil([7, 8, nil, 9]), [7, 8, 9])

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in s.

def is_plural(word)
	return word.end_with?('s')
end

### tests
Test.assert_equals(is_plural("varies"), true)
Test.assert_equals(is_plural("efforts"), true)
Test.assert_equals(is_plural("mood"), false)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###

def calc_determinant(matrix)
	return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
end

### tests
Test.assert_equals(calc_determinant([[1, 2], [3, 4]]), -2)
Test.assert_equals(calc_determinant([[5, 3], [3, 1]]), -4)
Test.assert_equals(calc_determinant([[1, 1], [1, 1]]), 0)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###  Create a function that takes an array and returns the difference between the smallest and biggest numbers.

def difference_max_min(arr)
  	return arr.max - arr.min
end

### tests
Test.assert_equals(difference_max_min([10,4,1,2,8,91]), 90)
Test.assert_equals(difference_max_min([-70,43,34,54,22]), 124)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### Write a function that takes the base and height of a triangle and return its area. The area of a triangle is (base * height) / 2.

def tri_area(base, height)
	return (base * height) / 2
end

### tests
Test.assert_equals(tri_area(3, 2), 3)
Test.assert_equals(tri_area(5, 4), 10)
Test.assert_equals(tri_area(10, 10), 50)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
### You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm.

def animals(chickens, cows, pigs)
	return (chickens * 2) + (cows * 4) + (pigs * 4)
end

### tests
Test.assert_equals(animals(5, 2, 8), 50)
Test.assert_equals(animals(3, 4, 7), 50)
Test.assert_equals(animals(1, 2, 3), 22)

### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests



































#                 template
### -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ###
###



### tests
