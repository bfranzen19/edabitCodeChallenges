atom// profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings as arguments and return either true or false depending on whether the number of their charcters is equal or not.

function comp(str1, str2) {
	if(str1.length == str2.length) {
    return true
  } else {
    return false
  }
}

// tests
Test.assertEquals(comp("AB", "CD"), true);
Test.assertEquals(comp("ABC", "DE"), false);
Test.assertEquals(comp("hello", "edabit"), false);


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns the amount of digits it has.

function findDigitAmount(num) {
  let numStr = num.toString().length
  return numStr
}

// tests
Test.assertEquals(findDigitAmount(1), 1, 'Should work with one digit');
Test.assertEquals(findDigitAmount(67), 2, 'Should work with a two-digit number');
Test.assertEquals(findDigitAmount(123), 3, 'Should work with a three-digit number');

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(num, exp) {
  if(num>0 && exp>0) {
    var exp = Math.pow(num, exp)
    return exp
  } else {
    return false
  }
}

// tests
Test.assertEquals(calculateExponent(5,5), 3125);
Test.assertEquals(calculateExponent(3,3), 27);
Test.assertEquals(calculateExponent(10,10), 10000000000);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num) {
  var hyph = '-'
	if(num>0 && num<61) {
    return hyph.repeat(num)
  } else {
    return false
  }
}

// tests
Test.assertEquals(Go(1),"-");
Test.assertEquals(Go(24),"------------------------");
Test.assertEquals(Go(60),"------------------------------------------------------------");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

function month_name(num) {
    if(num < 13 && num > 0) {
        switch(num) {
            case 1:
                return 'January'
            case 2:
                return 'February'
            case 3:
                return 'March'
            case 4:
                return 'April'
            case 5:
                return 'May'
            case 6:
                return 'June'
            case 7:
                return 'July'
            case 8:
                return 'August'
            case 9:
                return 'September'
            case 10:
                return 'October'
            case 11:
                return 'November'
            case 12:
                return 'December'
        }
  } else {
    return false
  }
}

// tests
Test.assertEquals(month_name(1), 'January');
Test.assertEquals(month_name(2)	, 'February');
Test.assertEquals(month_name(3), 'March');

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function to multiply all values in an array by the amount of values in that array.

function MultiplyByLength(arr) {
  let len = arr.length

	if(arr.length > 0) {
    const newArrMap = arr.map(x => x*len)
    return newArrMap
  } else {
    return false
  }
}

// tests
Test.assertSimilar(MultiplyByLength([2,6,4,9]), [8,24,16,36]);
Test.assertSimilar(MultiplyByLength([4,1,1]), [12,3,3]);
Test.assertSimilar(MultiplyByLength([1,0,3,3,7,2,1]), [7,0,21,21,49,14,7]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array and a string as arguments and return the index of the string.

function find_index(arr, str) {
	let arrIndex = arr.indexOf(str)
  return arrIndex
}

// tests
Test.assertEquals(find_index(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3);
Test.assertEquals(find_index(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5);
Test.assertEquals(find_index(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
  	let arr = []
	if(typeof item == 'string' || typeof item == 'number' && typeof times == 'number') {
    	for(i=0 ; i<times ; i++) {
          arr.push(item)
        }
	return arr
    }
}

// tests
Test.assertSimilar(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
Test.assertSimilar(repeat(13, 5), [13, 13, 13, 13, 13]);
Test.assertSimilar(repeat("7", 2),  ["7", "7"]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
  return ++num
}

// tests
Test.assertEquals(addition(2), 3);
Test.assertEquals(addition(-9), -8);
Test.assertEquals(addition(0), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(bool) {
  if(typeof bool == 'number') {
    return "boolean expected"
  } else if(bool == true || bool == false){
    bool = !bool
    return bool
  } else {
    return "boolean expected"
  }
}

// tests
Test.assertEquals(reverse(false), true);
Test.assertEquals(reverse(true), false);
Test.assertEquals(reverse(0), "boolean expected");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
	if(typeof a == 'number' && typeof b == 'number') {
      	let sum = a + b
  		return sum
    } else {
      return "please enter numbers only"
    }
}

// tests
Test.assertEquals( addition(2,3), 5);
Test.assertEquals( addition(-3,-6), -9);
Test.assertEquals( addition(7,3), 10);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
	let strArr = str.split(" ").length
	return strArr
}

// tests
Test.assertEquals(countWords("It's high noon"), 3);
Test.assertEquals(countWords("Is this easy mode"), 4);
Test.assertEquals(countWords("Is this easy mode"), 4);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    if(num <= 0) {
        return true
    } else {
        return false
    }
}

// tests
Test.assertEquals(lessThanOrEqualToZero(5), false);
Test.assertEquals(lessThanOrEqualToZero(0), true);
Test.assertEquals(lessThanOrEqualToZero(-5), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr) {
	let smallest = Math.min.apply(null, arr)
    return smallest
}

// tests
Test.assertEquals(findSmallestNum([34, 15, 88, 2]), 2)
Test.assertEquals(findSmallestNum([34, -345, -1, 100]), -345)
Test.assertEquals(findSmallestNum([-76, 1.345, 1, 0]), -76)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .

function checkEnding(str1, str2) {
  if(str1.length>0 && str2.length>0 && typeof str1 == 'string' && typeof str2 == 'string') {
    if(str1.substr(-str2.length) === str2) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// tests
Test.assertEquals(checkEnding("abc", "bc"), true);
Test.assertEquals(checkEnding("abc", "d"), false);
Test.assertEquals(checkEnding("samurai", "zi"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
  var largest = Math.max.apply(null,arr)
  return largest
}

// tests
Test.assertEquals(findLargestNum([4, 5, 1, 3]), 5)
Test.assertEquals(findLargestNum([13, 27, 18, 26]), 27)
Test.assertEquals(findLargestNum([32, 35, 37, 39]), 39)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
	if(typeof num == 'number') {
    if(num % 2 == 0 || num == 0) {
      return "even"
    } else {
      return 'odd'
    }
  } else {
    return false
  }
}

// tests
Test.assertEquals(isEvenOrOdd(3), "odd");
Test.assertEquals(isEvenOrOdd(0), "even");
Test.assertEquals(isEvenOrOdd(7), "odd");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
  let lastItem = arr.pop()
  return lastItem
}

// tests
Test.assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck');
Test.assertEquals(getLastItem([1, 2, 3]), 3);
Test.assertEquals(getLastItem([undefined]));

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
	if(typeof str == 'string') {
        let arr = str.split("").reverse().join("")
        return arr
  	} else {
    	return false
 	}
}

// tests
Test.assertEquals(reverse("Think different."), ".tnereffid knihT");
Test.assertEquals(reverse("It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."), ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI");
Test.assertEquals(reverse("Innovation is the ability to see change as an opportunity - not a threat"), "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	if(typeof arr == 'object' && arr.length>0) {
      	let min = Math.min(...arr)
      	let max = Math.max(...arr)
      	let newArr = [min, max]
        return newArr
    } else {
      	return "invalid input"
    }
}

// tests
Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
	if(typeof num == 'number' && num > 0 && num < 1001) {
      	let sum = 0

      	for(var i=1 ; i<num+1 ; i++) {
          	sum = sum + i
        }
      	return sum
    } else {
      	return "invalid input"
    }
}

// tests
Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

function nameShuffle(str) {
	if(typeof str == 'string') {
		let flipsie = str.split(" ").reverse().join(" ")
		return flipsie
    } else {
        return "invalid input"
    }
}

// tests
Test.assertEquals(nameShuffle("Rosie O'Donnel"),"O'Donnel Rosie");
Test.assertEquals(nameShuffle("Seymour Butts"),"Butts Seymour");
Test.assertEquals(nameShuffle("Ebony Greene"),"Greene Ebony");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

function charCount(myChar, str) {
  	let returnArr = str.split('')
    let numChars = 0

	if(str.length > 0 && typeof myChar === 'string' && typeof str === 'string') {
		for(var i=0 ; i<str.length ; i++) {
        	if(str[i] == myChar) {
              	numChars ++
            }
        }
      	return numChars
    } else {
      	return false

    }
}

// tests
Test.assertEquals(charCount('a', 'edabit'), 1);
Test.assertEquals(charCount('b', 'big fat bubble'), 4);
Test.assertEquals(charCount('c', 'Chamber of secrets'), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

function isFourLetters(arr) {
  	let retArr = []
	if(arr.length > 0 && typeof arr == 'object') {
		for(var i=0 ; i<arr.length ; i++) {
        	if(arr[i].length == 4) {
              	retArr.push(arr[i])
            }
        }
      	return retArr
    }
  	return []
}

// tests
Test.assertSimilar(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
Test.assertSimilar(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
Test.assertSimilar(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  	let arr = []
    let retStr = ""
	for(var i=0 ; i<str.length ; i++) {
      arr.push(str.charAt(i).repeat(2))
      retStr = arr.join("").toString()
    }
  	return retStr
}

// tests
Test.assertEquals(doubleChar("String"), "SSttrriinngg")
Test.assertEquals(doubleChar("Hello World!"), "HHeelllloo  WWoorrlldd!!")
Test.assertEquals(doubleChar("1234!_ "), "11223344!!__  ")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

function filterArray(arr) {
  	let result = []

	for(var i=0 ; i<arr.length ; i++) {
       if(Number.isInteger(arr[i])) {
         result.push(arr[i])
       }
    }
  	return result
}

// tests
Test.assertSimilar(filterArray([1, 2, "a", "b"]), [1, 2]);
Test.assertSimilar(filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);
Test.assertSimilar(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
	return str.split("").sort().join("")
}

// tests
Test.assertEquals(AlphabetSoup("hello"), "ehllo");
Test.assertEquals(AlphabetSoup("edabit"), "abdeit");
Test.assertEquals(AlphabetSoup("hacker"), "acehkr");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given a number n, write a function that returns PI to n decimal places.

function myPi(n) {
  	if(n <= 15) {
      	let result = Number.parseFloat(Math.PI.toFixed(n))
      	return result
    } else {
      	return false
    }
}

// tests
Test.assertEquals(myPi(0), 3);
Test.assertEquals(myPi( 1), 3.1);
Test.assertEquals(myPi( 2), 3.14);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  	let day = date.getDate(date)
    let month = date.getMonth(date)

  	if(month == 11 && day == 24) {
      	return true
    }
  	return false
}

// tests
Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
  	let newArr = []
    let result = 0

    let abs = arr.map((x, i, arr) => {
      	return Math.abs(arr[i])
    })

    for(var i=0 ; i<abs.length; i++) {
    	result += abs[i]
    }
    return result
}


// tests
Test.assertEquals(getAbsSum([2, -1, -3, 4, 8]), 18);
Test.assertEquals(getAbsSum([-1]), 1);
Test.assertEquals(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
	let sum = arr.reduce(function(a,b) {
    	return a + b
    }, 0)

    let result = Number.isInteger(sum / arr.length)

    return result
}

// tests
Test.assertEquals(isAvgWhole([3, 5, 9]), false);
Test.assertEquals(isAvgWhole([1, 1, 1, 1]), true);
Test.assertEquals(isAvgWhole([1, 2, 3, 4, 5]), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

function sortNumsAscending(arr) {
	if(arr == null || arr.length == 0) {
      	return []
    } else {
    	return arr = arr.sort((a,b) => a-b)
    }
}



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns a new string with all vowels removed.
function silenceTrump(str) {
    var vowels = /[aeiou]/gi;
    return str.replace(vowels, "")
}

// tests
Test.assertEquals(silenceTrump("If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!"), "f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!")
Test.assertEquals(silenceTrump("This election is a total sham and a travesty. We are not a democracy!"), "Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!")
Test.assertEquals(silenceTrump("I have never seen a thin person drinking Diet Coke."), " hv nvr sn  thn prsn drnkng Dt Ck.")
Test.assertEquals(silenceTrump("Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!"), "vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
	let vowels = /[aeiou]/ig
    let count = 0

    if(str.match(vowels)) {
		return str.match(vowels).length
    }
}

// tests
Test.assertEquals(countVowels("Celebration"), 5)
Test.assertEquals(countVowels("Palm"), 1)
Test.assertEquals(countVowels("Prediction"), 4)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

function factorial(int) {
  	let result = int

	if(int == 0) {
    	return 1
    } else {
      	while (int > 1) {
        	int--
          	result = result * int
        }
      	return result
    }
}

// tests
Test.assertEquals(factorial(2), 2);
Test.assertEquals(factorial(6), 720);
Test.assertEquals(factorial(3), 6);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

function sortNumsAscending(arr) {
	if(arr == null || arr.length == 0) {
      	return []
    } else {
    	return arr = arr.sort((a,b) => a-b)
    }
}

// tests
Test.assertSimilar(sortNumsAscending([1, 2, 10, 50, 5]), [1, 2, 5, 10, 50])
Test.assertSimilar(sortNumsAscending([80, 29, 4, -95, -24, 85]), [-95, -24, 4, 29, 80, 85])
Test.assertSimilar(sortNumsAscending(null), [])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
  	let resultArr = []

    for(var i=0 ; i<arr.length ; i++) {
      	if(arr[i] % 2 == false) {
			resultArr.push(arr[i])
        }
    }
    return resultArr
}

// tests
Test.assertSimilar(noOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);
Test.assertSimilar(noOdds([43, 65, 23, 89, 53, 9, 6]), [6]);
Test.assertSimilar(noOdds([718, 991, 449, 644, 380, 440]), [718, 644, 380, 440]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
  	let retArr = []

  	for(var i=0 ; i<arr.length ; i++) {
    	retArr.push(Math.max(...arr[i]))
    }
  	return retArr
}

// tests
Test.assertSimilar(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]), [7, 90, 2])
Test.assertSimilar(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]), [0.7634, 9.32, 9])
Test.assertSimilar(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value

function minMaxLengthAverage(arr) {
	let sortedArr = arr.sort((a,b) => a-b)
    let resultArr = []
    let len = arr.length
    let min = arr[0]
    let max = arr[len-1]
    let av = arr.reduce((acc,cV) => acc+cV,0) / len

    resultArr.push(min,max,len,av)
    return resultArr
}

// tests
Test.assertSimilar(minMaxLengthAverage([6, 9, 15, -2, 92, 11]), [-2, 92, 6, 21.833333333333332]);
Test.assertSimilar(minMaxLengthAverage([30, 43, 20, 92, 3, 74]), [3, 92, 6, 43.666666666666664]);
Test.assertSimilar(minMaxLengthAverage([4.54, 8.32, 5.20]), [4.54, 8.32, 3, 6.02]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and returns the mean value.

function mean(arr) {
	const mean = arr.reduce((a,b) => a+b,0)/arr.length
	return parseFloat(mean.toFixed(2))
}

// tests
Test.assertEquals((mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])), 2.55);
Test.assertEquals((mean([324, 543, 654, 9876])), 2849.25);
Test.assertEquals((mean([0, 0, 0, 0])), 0.00);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
	const result = [...new Set(arr)]
    return result
}

// tests
Test.assertSimilar(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
Test.assertSimilar(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
Test.assertSimilar(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

function missingNums(arr) {
	arr = arr.sort((a,b)=>a-b)

  	for(var i=0 ; i<arr.length ; i++) {
		if(arr[i+1] - arr[i] !== 1) {
        	return arr[i] + 1
        } else if(arr[0] !== 1) {
		  	return 1
		}
    }
}

// tests
Test.assertEquals(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
Test.assertEquals(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
Test.assertEquals(missingNums([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

//  Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

function highLow(str) {
	let arr = str.split(" ")
    let max = Math.max.apply(null, arr)
    let min = Math.min.apply(null, arr)
    let ret = []
    ret.push(max)
    ret.push(min)
    return ret.join(' ')
}

// tests
Test.assertEquals(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214")
Test.assertEquals(highLow("1 -1"), "1 -1")
Test.assertEquals(highLow("1 1"), "1 1")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

function sortDecending(num) {
  	let res = Number(num.toString().split('').sort((a,b)=>b-a).join(''))
  	return res
}

// tests
Test.assertEquals(sortDecending(123), 321)
Test.assertEquals(sortDecending(670276097), 977766200)
Test.assertEquals(sortDecending(2619805), 9865210)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.

function XO(str) {
	let result = str.toLowerCase()
    let x = /[x]/
    let o = /[o]/
    let xArr = []
    let oArr = []

    for(var i=0 ; i<result.length ; i++) {
    	if(result[i].match(x)) {
        	xArr.push(result[i])
        } else if(result[i].match(o)) {
        	oArr.push(result[i])
        }
    }
  	if(xArr.length == oArr.length) {
      	return true
    } else {
      	return false
    }
}

// tests
Test.assertEquals(XO("ooxx"), true);
Test.assertEquals(XO("xooxx"), false);
Test.assertEquals(XO("ooxXm"), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
  	let ret = [num].toString()
    let arr = ret.split('').reverse().join('')

    if(ret.length == 1) {
      	return true
    } else {
      	if(ret == arr) {
          	console.log('ret - ' + ret + ' ;  arr - ' + arr)
          	return true
        } else {
		 	return false
		}
    }
}

// tests
Test.assertEquals(isSymmetrical(23), false);
Test.assertEquals(isSymmetrical(9562), false);
Test.assertEquals(isSymmetrical(10019), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

function formatNum(num) {
	return num.toLocaleString().toString()
}

// tests
Test.assertEquals(formatNum(1000), "1,000");
Test.assertEquals(formatNum(1000000), "1,000,000");
Test.assertEquals(formatNum(20), "20");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
  	let result = str.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5)
    return result
}

// tests
Test.assertEquals(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l");
Test.assertEquals(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r");
Test.assertEquals(hackerSpeak("hi there"), "h1 th3r3");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes three input values (a, b, c) and returns the number of equal values. Your function must return 0, 2 or 3.

function equal(a, b, c) {
	if(a == b && a == c && b == c) {
      	return 3
    } else if(a == b || a == c || b == c) {
      	return 2
    } else {
      	return 0
    }
}

// tests
Test.assertEquals(equal(2,3,4), 0, "All values are differents");
Test.assertEquals(equal(7,3,7), 2, "Two values are equal");
Test.assertEquals(equal(4,4,4), 3, "All 3 values are equal");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that alternates the case of the characters in a string. The first character should always be UPPERCASE.

function alternatingCaps(str) {
	let arr = []

	for(var i=0 ; i<str.length ; i++) {
    	if(i % 2 !== 0) {
        	arr.push(str[i].toLowerCase())
        } else {
        	arr.push(str[i].toUpperCase())
        }
    }
  	str = arr.join('')
	return str
}

// tests
Test.assertEquals(
  alternatingCaps('alternating caps'),
  'AlTeRnAtInG CaPs'
);
Test.assertEquals(
  alternatingCaps("Hello, what's your name?"),
  "HeLlO, wHaT'S YoUr nAmE?"
);
Test.assertEquals(
  alternatingCaps('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
  'LoReM IpSuM DoLoR SiT AmEt, CoNsEcTeTuR AdIpIsIcInG ElIt.'
);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of names and returns an array with the first letter capitalized. Don't change the order of the original array. Notice in the second example above, "MABELLE" is returned as "Mabelle".

function capMe(arr) {
  	let retArr = []

  	let str = arr.join(', ')
  	str = str.toLowerCase()
  	arr = str.split(', ')

    for(var i=0 ; i<arr.length ; i++) {
    	let firstLetter = arr[i].slice(0,1)
  		firstLetter = firstLetter.toUpperCase()

      let restOfWord = arr[i].slice(1)
    	let fullWord = []

    	fullWord.push(firstLetter)
        fullWord.push(restOfWord)

	  	res = fullWord.join('')
      	retArr.push(res)
    }
  	return retArr
}

// tests
Test.assertSimilar(capMe(['mavis', 'senaida', 'letty']), ['Mavis', 'Senaida', 'Letty'])
Test.assertSimilar(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
Test.assertSimilar(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string, removes all "special" characters (e.g. ! @ # $ % ^ & \ *) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

function removeSpecialCharacters(str) {
  let reg = /[^A-Za-z0-9_ -]/gi
  let ret = str.replace(reg, '')
	return ret
}

// tests
Test.assertEquals(removeSpecialCharacters("The quick brown fox!"), "The quick brown fox")
Test.assertEquals(removeSpecialCharacters("%fd76$fd(-)6GvKlO."), "fd76fd-6GvKlO")
Test.assertEquals(removeSpecialCharacters("D0n$c sed 0di0 du1"), "D0nc sed 0di0 du1")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.". You'll always get exactly four strings as arguments. Tests are case sensitive.

function verifySubstrs(mainStr, head, body, tail) {
  	if(mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)) {
      	return "My head, body, and tail."
    } else {
      	return "Incomplete."
    }
}

// tests
Test.assertEquals(verifySubstrs("Onomatopeia", "on", "mato", "ia"), "Incomplete.");
Test.assertEquals(verifySubstrs("Baby", "B", "ab", "y"), "My head, body, and tail.");
Test.assertEquals(verifySubstrs("Centipede", "Cent", "tip", "pede"), "My head, body, and tail.");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address. */

function validateEmail(str) {
	let basics = /\S+@\S+\.\S+/.test(str)
	return basics
}

// tests
Test.assertEquals(validateEmail('@edabit.com'), false)
Test.assertEquals(validateEmail('@edabit'), false)
Test.assertEquals(validateEmail('matt@edabit.com'), true)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that returns the number of argument it was called with.

function numArgs() {
	 return arguments.length
}

// tests
Test.assertEquals(numArgs(), 0);
Test.assertEquals(numArgs('foo'), 1);
Test.assertEquals(numArgs('foo', 'bar'), 2);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

function countOnes(i) {
	let arr = (i >>> 0).toString(2).split('')
    let final = arr.filter(x => x == 1).length

    return final
}

// tests
Test.assertEquals(countOnes(12), 2)
Test.assertEquals(countOnes(0), 0)
Test.assertEquals(countOnes(100), 3)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names

function getStudentNames(students) {

}

// tests
const areEqual = (actual, expected) => expected.every(
  (item, index) => item === actual[index]
)
const sets = [
  ['Jacek', 'Ewa', 'Zygmunt'],
  ['Tomek'],
  []
].map(
  set => ({
    actual: getStudentNames(
      set.map(name => ({ name }))
    ),
    expected: set
  })
).forEach(
  ({ actual, expected }) => {
    Test.expectNoError('Result should be an array', () => {
      Test.assertEquals(areEqual(actual, expected), true, '' + actual)
    })
  }
)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names

function getStudentNames(students) {
  let ret = []
  for(var i=0 ; i<students.length ; i++) {
    ret.push(students[i].name)
  }
  return ret
}

// tests
getStudentNames([{ name: 'Steve',}, { name: 'Mike'}, { name: 'John'}])

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return the first and last elements as a new array.

function firstLast(arr) {
	let newArr = []
	newArr.push(arr.shift())
	newArr.push(arr.pop())
	return newArr
}

// tests
Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25]);
Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true]);
Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of numbers and return the first and last elements as a new array.

Examples

function firstLast(arr) {
	let retArr = []
	retArr.push(arr[0])
  	retArr.push(arr.pop())
  	return retArr
}

// tests
Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25]);
Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true]);
Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array of students and returns an array of student names.

function getStudentNames(students) {
  	let arr = [];
	const ret = students.map(x => {
    	arr.push(x.name);
    });
	return arr;
}

// tests
const areEqual = (actual, expected) => expected.every(
  (item, index) => item === actual[index]
)
const sets = [
  ['Jacek', 'Ewa', 'Zygmunt'],
  ['Tomek'],
  []
].map(
  set => ({
    actual: getStudentNames(
      set.map(name => ({ name }))
    ),
    expected: set
  })
).forEach(
  ({ actual, expected }) => {
    Test.expectNoError('Result should be an array', () => {
      Test.assertEquals(areEqual(actual, expected), true, '' + actual)
    })
  }
)

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
	arr = str.split('');
  	let result = [];

  	for(let i=0 ; i<arr.length-4 ; i++) {
	  result.push('#');
	}

  	for(let i=arr.length-4 ; i<arr.length ; i++) {
	  result.push(arr[i]);
	}
  	return result.join('');
}

// tests
Test.assertEquals(percentDiff(60, 100), 50.0);
Test.assertEquals(percentDiff(100, 60), 50.0);
Test.assertEquals(percentDiff(5439, 4538), 18.1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given an array of numbers, write a function that returns an array that:
// 1. Has all duplicate elements removed.
// 2. Is sorted from least to greatest value.

function uniqueSort(arr) {
	arr.sort((a,b)=>a-b);
  	let ret = new Set();

  	arr.forEach(x => {
		ret.add(x);
	});

  	let result = Array.from(ret);

  	return result;
}

// tests
Test.assertSimilar(uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]),[1, 2, 3, 4, 5, 8, 10]);
Test.assertSimilar(uniqueSort([1, 2, 5, 4, 7, 7, 7]),[1, 2, 4, 5, 7]);
Test.assertSimilar(uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]),[0, 1, 2, 3, 4, 5, 6, 7]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// There is a single operator in Javascript capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.

function remainder(x, y){
	return x % y;
}

// tests
Test.assertEquals(remainder(7,2), 1);
Test.assertEquals(remainder(3, 4), 3);
Test.assertEquals(remainder(-9, 45), -9);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes three arguments (txt, txt_length, txt_suffix) and returns a truncated string.
	// txt: Original string.
	// txt_length: Truncated length limit.
	// txt_suffix: Optional suffix string parameter.
// Truncated returned string length should adjust to passed length in parameters regardless of length of the suffix.

function truncate(txt, txt_length, txt_suffix = null){
	let ret = txt.substring(-1, txt_length);

  	if(txt_suffix != null) {
	  let spl = ret.split('');
	  for(let i=txt_length-txt_suffix.length ; i>txt_suffix.length ; i--) {
		spl.pop(spl[i]);
	  }
	  	spl.push(txt_suffix)
		ret = spl.join('');
	}
  	return ret;
}

// tests
Test.assertEquals(truncate("CatDogDuck", 9, "Rat"), "CatDogRat")
Test.assertEquals(truncate("DogCat", 3), "Dog")

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// x = 1 and y = 2. without the use of a temporary variable, make x = 2 and y =1.

function run() {
  let x = 1;
  let y = 2;

  console.log('x1: ', x);
  console.log('y1: ', y);

  x = x - x + y;
  y = y/x;

  console.log('x2: ', x);
  console.log('y2: ', y);
}

run();

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function which is given a number and returns the value squared.

function square(value) {
	return value * value;
}

// tests
Test.assertEquals(square(0), 0);
Test.assertEquals(square(1), 1);
Test.assertEquals(square(-1), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a number argument and returns true if the number is negative, false otherwise.

function isNegative(value) {
  	return (value >= 0) ? false : true;
}

// tests
Test.assertEquals(isNegative(0), false);
Test.assertEquals(isNegative(-1), true);
Test.assertEquals(isNegative(1), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName.concat(', ' + firstName);
}

// tests
Test.assertEquals(concatName("John", "Doe"), "Doe, John");
Test.assertEquals(concatName("First", "Last"), "Last, First");
Test.assertEquals(concatName("A", "B"), "B, A");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890

function isValidPhoneNumber(str) {
  	let reg = /^\(?([0-9]{3})\)[ ]([0-9]{3})[-]([0-9]{4})$/;
	return reg.test(str);
}

// tests
Test.assertEquals(isValidPhoneNumber("(123) 456-7890"), true);
Test.assertEquals(isValidPhoneNumber("(1111)555 2345"), false);
Test.assertEquals(isValidPhoneNumber("(098) 123 4567"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes two numbers as arguments and return the percent difference between them.

function percentDiff(num1, num2) {
	let diffOfVal = Math.abs(num1 - num2);
  	let aveOfVal = (num1 + num2) / 2;
  	let ret = (diffOfVal / aveOfVal) * 100;

  	if(ret.toFixed(1) % 1 !== 0) return Number(ret.toFixed(1));
  	else return Math.round(ret);
}

// tests
Test.assertEquals(percentDiff(60, 100), 50.0);
Test.assertEquals(percentDiff(100, 60), 50.0);
Test.assertEquals(percentDiff(5439, 4538), 18.1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Write a function that takes two strings and returns (true or false) whether they're anagrams or not.

function isAnagram(s1, s2) {
	let lc1 = s1.toLowerCase().split('').sort().join('');
  	let lc2 = s2.toLowerCase().split('').sort().join('');

  	return (lc1 === lc2);
}

// tests
Test.assertEquals(isAnagram('cristian', 'Cristina'), true);
Test.assertEquals(isAnagram('Dave Barry', 'Ray Adverb'), true);
Test.assertEquals(isAnagram('Nope', 'Note'), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Write a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in s.

function isPlural(word) {
	return word.endsWith('s');
}

// tests
Test.assertEquals(isPlural("dudes"), true);
Test.assertEquals(isPlural("flowers"), true);
Test.assertEquals(isPlural("checks"), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// You are given 2 out of 3 of the angles in a triangle, in degrees.
//
// Write a function that determines the classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//
// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).

function missingAngle(angle1, angle2) {
  	let missing = Math.abs(180-(angle1 + angle2));

	if(missing === 90) return 'right';
  	else if(missing < 90) return 'acute';
  	else return 'obtuse';
}

// tests
Test.assertEquals(missingAngle(27, 59), "obtuse");
Test.assertEquals(missingAngle(135, 11), "acute");
Test.assertEquals(missingAngle(45, 45), "right");

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Agatha and Bertha are sisters eating chocolate given to them by their parents. Bertha has always suspected her parents of considering Agatha as the favorite child. To settle this dispute once and for all, she decides to analyze all pieces of chocolate split between them, and determine that if they both have an equal amount of chocolate, then no favoritism exists.

// Create a function that returns true if the total amount of chocolate is identical for each sister. All chocolate are given in rectangular pieces that are represented by a pair of coordinates for length and width. Sum up the total area of chocolate for each sister, and return true if the total area of chocolate is the same.

function testFairness(agatha, bertha) {
  	let ag = [];
  	let b = [];

  	for(let i=0 ; i<agatha.length ; i++) {
		ag.push(agatha[i][0] * agatha[i][1]);
	}

  	for(let i=0 ; i<bertha.length ; i++) {
	  	b.push(bertha[i][0] * bertha[i][1]);
	}

  	let agSum = ag.reduce((a,b) => a+b, 0);
  	let bSum = b.reduce((a,b) => a+b, 0);

  	if(agSum == bSum) return true;
  	else return false;
}

// tests
Test.assertEquals(testFairness([[1,5], [6,3], [1,1]], [[7,1], [2,2], [1,1]]), false);
Test.assertEquals(testFairness([[2,2], [2,2], [2,2], [2,2]], [[4,4]]), true);
Test.assertEquals(testFairness([[1,2], [2,1]], [[2,2]]), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//  Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num) {
	if(num % 100 === 0) return true;
  	else return false;
}

// tests
Test.assertEquals(divisible(1), false);
Test.assertEquals(divisible(100), true);
Test.assertEquals(divisible(1000), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// A chessboard has rows numbered 1-8 and columns numbered A-H. In chess, rooks are pieces that can any number of squares horizontally or vertically.

// Given the location of your rook and your opponent's rook, determine whether or not you can capture your opponent's rook with your own. For this exercise, assume there are no other pieces that are blocking. Your position and your opponent's position are represented as the first and second element of the input array, respectively.
//
// For instance, in this example: canCapture(["A8", "E8"]) ➞ true your rook (at A8) can take your opponents rook (at E8) by moving horizontally.

function canCapture([yourRook, opponentsRook]) {
	if(yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]) return true;
	else return false;
}

// tests
Test.assertEquals(canCapture(['A8', 'E8']), true);
Test.assertEquals(canCapture(['A1', 'B2']), false);
Test.assertEquals(canCapture(['H4', 'H3']), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes in array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles. A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// So for example, hurdleJump([1, 2, 4, 3, 2, 3], 4) should return true, since 4 is greater than or equal to each element in the array. On the other hand, hurdleJump([1,2,2,1], 1) should return false, since the hurdler cannot clear the second hurdle.
//
// Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

function hurdleJump(hurdles, jumpHeight) {
	let sorted = hurdles.sort((a,b) => a-b);
  	if(sorted.length === 0 || sorted[sorted.length - 1] <= jumpHeight) return true;
  	else return false;
}

// tests
Test.assertEquals(hurdleJump([1, 2, 3, 4, 5], 5), true);
Test.assertEquals(hurdleJump([5, 5, 3, 4, 5], 3), false);
Test.assertEquals(hurdleJump([], 4), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

// coding challenge for iFit through hackerrank

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Need to deliver a package of cookie bags. you will be given an inventory of small bags (1 kilo each) and big bags (5 kilos each), along with the goal amount of kilos that need to be shipped to the customer. return the amount of small bags the package will contain, assuming we always use big bags first. return -1 if this cannot be done.

function createPackage(small, big, goal) {
  let newGoal = goal;
  let newBig = big;

  while (newGoal >= 5 && newBig > 0) {
    newGoal = newGoal - 5;
    newBig--;
  }
  if (newGoal > small) {
    return -1;
  }
  return newGoal;
}

// tests
createPackage(10, 5, 12);  // 12 - 10 (2big) = 2 small
createPackage(10, 5, 15);  // 15 - 15 (3big) = 0 small
createPackage(1, 5, 12); // 12 - 10 (2big) = 2 small. return -1.
createPackage(100, 5, 120); // 120 - 25 (5big) = 95 small
createPackage(100, 5, 0); // return 0
createPackage(3, 5, 10); // 10 - 10 (2big) = 0 small
createPackage(4, 1, 9);  // 9 - 5 (1big) = 4 small
createPackage(0, 1, 24);  // 24 - 5 (1big) = 19. return -1.



/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// return 1 if the array contains 3 increasing consecutive numbers ([...,4,5,6,...] or [...,23,24,25,...]). otherwise, return 0.

function consecThree(a) {
    for(let i=0 ; i<a.length ; i++) {
    	if(a[i]+1 === a[i+1] && a[i+1] + 1 === a[i+2]) return true;
      	else return false;
    }
}

// tests
consecThree([3,1,2,3]);
consecThree([13,4,1,2,3]);
consecThree([1,2,4,5]);
consecThree([3,2,1,3]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Create a function that takes in 3 parameters (probability of winning, prize value, and cost of playing) and returns whether or not the gamble is profitable.

A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

For instance, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0. */

function profitableGamble(prob, prize, pay) {
	let net = prob * prize - pay;
  	if(net > 0) return true;
  	else return false;
}

// tests
Test.assertEquals(profitableGamble(0.2, 50, 9), true);
Test.assertEquals(profitableGamble(0.9, 1, 2), false);
Test.assertEquals(profitableGamble(0.9, 3, 2), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
    Total number of slices.
    Number of recipients.
    How many slices each person gets. */

function equalSlices(total, people, each) {
	return people * each <= total;
}

// tests
Test.assertEquals(equalSlices(8, 3, 2), true);
Test.assertEquals(equalSlices(8, 3, 3), false);
Test.assertEquals(equalSlices(24, 12, 2), true);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
	let arr = []

  	for(var i=1 ; i<=num ; i++) {
		arr.push(i);
	}

  	let retArr = arr.filter(x => x % 2 === 0);
  	return retArr;
}

// tests
Test.assertSimilar(findEvenNums(4), [2, 4]);
Test.assertSimilar(findEvenNums(8), [2, 4 ,6, 8]);
Test.assertSimilar(findEvenNums(2), [2]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.

function isValid(zip) {
	let zipArr = zip.split('')

	if(zipArr.length !== 5) return false;
	const ret = zipArr.filter(x => x / 1 >= 0 && x !== ' ');

  	return ret.length === 5;
}

// tests
Test.assertEquals(isValid("59001"), true);
Test.assertEquals(isValid("853a7"), false);
Test.assertEquals(isValid("732 32"), false);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an integer and returns an array from 1 to the given number, where:
    // If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
    // If the number cannot be divided evenly by 4, simply return the number.

function amplify(num) {
  	let arr = [];
	for(let i=1 ; i<=num ; i++) {
		arr.push(i);
	}

  	for(let j=0 ; j<arr.length ; j++) {
		if(arr[j] % 4 === 0) {
			arr.splice(j, 1, arr[j]*10);
		}
	}
  	return arr;
}

// tests
Test.assertSimilar(amplify(1), [1]);
Test.assertSimilar(amplify(4), [1, 2, 3, 40]);
Test.assertSimilar(amplify(25), [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/* In JavaScript, a truthy value is a value that translates
to true when evaluated in a Boolean context. All values
are truthy unless they're defined as falsy.

All falsy values are as follows:
  false
  null
  undefined
  0
  NaN
  ""

Create a function that takes an argument of any data
type and returns 1 if it's truthy and 0 if it's falsy. */

function isTruthy(input) {
	if(input === false || input === null
	   || input === undefined || input === 0
	   || input === ""|| Number.isNaN(input) ) return 0;
  	else return 1;
}

// or

function isTruthy(input) {
	return input ? 1 : 0;
}


// tests
Test.assertEquals(isTruthy(1), 1);
Test.assertEquals(isTruthy(-1), 1);
Test.assertEquals(isTruthy("false"), 1);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests



















/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//



// tests
