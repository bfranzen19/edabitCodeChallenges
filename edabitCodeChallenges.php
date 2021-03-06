<!-- Create a function that takes an array of numbers and returns the smallest number in the set. -->

function findSmallestNum($arr) {
 	$minVal = min($arr);
	return $minVal;
}

<!-- tests -->
class SmallestNumber extends TestCase
{
    /**
     * @dataProvider exampleProvider
     */
    public function test($haystack, $expected)
    {
        $this->assertSame($expected, findSmallestNum($haystack));
    }

    public function exampleProvider()
    {
        return [
          [[34, 15, 88, 2], 2],
          [[34, -345, -1, 100], -345],
          [[-76, 1.345, 1, 0], -76],
          [[0.4356, 0.8795, 0.5435, -0.9999], -0.9999],
          [[7, 7, 7], 7],
          [[4, 6, 1, 3, 4, 5, 5, 1], 1],
          [[-4, -6, -8, -1], -8],
          [[54, 76, 23, 54], 23],
          [[100], 100],
          [[0, 1, 2, 3, 4, 5], 0]
        ];
    }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Create a function that takes two numbers as arguments and return their sum. -->

function addition($a, $b) {
	return $a + $b;
}

<!-- tests -->
class SumOf2NumbersTest extends TestCase {
  public function testAddition() {
    $this->assertEquals(5, addition(2,3), "Expected 2 + 3 = 5, got " . addition(2,3));
    $this->assertEquals(-9, addition(-3,-6), "Expected -3 + (-6) = -9, got " . addition(-3,-6));
    $this->assertEquals(10, addition(7,3), "Expected  7 + 3 = 10, got " . addition(7,3));
  }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false. -->

function lessThanOrEqualToZero($num) {
	if($num <= 0) {
	  return true;
	}
  	else
	  return false;
}

<!-- tests -->
class IsNumberZeroOrNegativeTest extends TestCase {
  public function testZeroOrNegative() {
    $this->assertFalse(lessThanOrEqualToZero(5), "5 is more than zero");
    $this->assertTrue(lessThanOrEqualToZero(0), "0 is equal zero");
    $this->assertTrue(lessThanOrEqualToZero(-5), "-5 is less than zero");
    $this->assertFalse(lessThanOrEqualToZero(1), "1 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(2), "2 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(10000), "10000 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(0.5), "0.5 is more than zero");
  }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Create a function that accepts an array and returns the last item in the array. -->

function getLastItem($arr) {
	return end($arr);
}

<!-- tests -->
class MyTestCases extends TestCase
{
    /**
     * @dataProvider exampleProvider
     */
    public function testExample($haystack, $expected)
    {
        $this->assertSame($expected, getLastItem($haystack));
    }

    public function exampleProvider()
    {
        return [
          [
            ['Cat', 'Dog', 'Duck'],
            'Duck',
          ],
          [
            [1, 2, 3], 3
          ],
          [[null], null],
          [
            [true, false, false, true],
            true,
          ],
          [
            [7, 'String', false, 12.33, null],
            null
          ],
          [
            [false], false
          ],
          [
            [null, null, null],
            null
          ],
          [
            [1, 2, 3, 56, 87, 23, 65, 45],
            45
          ],
          [
            ['Apple', 'Orange', null], null
          ],
          [
            [true, false, 'Apple'],
            'Apple'
          ],
          [
            [1],
            1
          ],
        ];
    }

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false. -->

function lessThanOrEqualToZero($num) {
	if($num <= 0) {
	  return true;
	}
  	return false;
}

<!-- tests -->
class IsNumberZeroOrNegativeTest extends TestCase {
  public function testZeroOrNegative() {
    $this->assertFalse(lessThanOrEqualToZero(5), "5 is more than zero");
    $this->assertTrue(lessThanOrEqualToZero(0), "0 is equal zero");
    $this->assertTrue(lessThanOrEqualToZero(-5), "-5 is less than zero");
    $this->assertFalse(lessThanOrEqualToZero(1), "1 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(2), "2 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(10000), "10000 is more than zero");
    $this->assertFalse(lessThanOrEqualToZero(0.5), "0.5 is more than zero");
  }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Create a function that accepts an array and returns the last item in the array. -->

function getLastItem($arr) {
	return end($arr);
}

<!-- tests -->
class MyTestCases extends TestCase
{
    /**
     * @dataProvider exampleProvider
     */
    public function testExample($haystack, $expected)
    {
        $this->assertSame($expected, getLastItem($haystack));
    }

    public function exampleProvider()
    {
        return [
          [
            ['Cat', 'Dog', 'Duck'],
            'Duck',
          ],
          [
            [1, 2, 3], 3
          ],
          [[null], null],
          [
            [true, false, false, true],
            true,
          ],
          [
            [7, 'String', false, 12.33, null],
            null
          ],
          [
            [false], false
          ],
          [
            [null, null, null],
            null
          ],
          [
            [1, 2, 3, 56, 87, 23, 65, 45],
            45
          ],
          [
            ['Apple', 'Orange', null], null
          ],
          [
            [true, false, 'Apple'],
            'Apple'
          ],
          [
            [1],
            1
          ],
        ];
    }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- Given a number n, write a function that returns PI to n decimal places. -->

function myPi($n) {
  return round(pi(), $n, PHP_ROUND_HALF_UP);
}

<!-- tests -->
class PiToN extends TestCase
{
  public function test()
  {
    $this->assertEquals(3, myPi(0));
    $this->assertEquals(3.1, myPi( 1));
    $this->assertEquals(3.14, myPi( 2));
    $this->assertEquals(3.142, myPi( 3));
    $this->assertNotEquals(3.1415, myPi(4), "Don't forget to round up!");
    $this->assertEquals(3.14159, myPi( 5));
    $this->assertEquals(3.141593, myPi( 6));
    $this->assertEquals(3.1415927, myPi( 7));
    $this->assertEquals(3.14159265, myPi( 8));
    $this->assertEquals(3.141592654, myPi( 9));
    $this->assertEquals(3.1415926536, myPi(10));
    $this->assertEquals(3.14159265359, myPi(11));
    $this->assertEquals(3.141592653590, myPi(12));
    $this->assertEquals(3.1415926535898, myPi(13));
    $this->assertEquals(3.14159265358979, myPi(14));
    $this->assertEquals(3.141592653589793, myPi(15));
  }
}

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!--  -->



<!-- tests -->



























<!-- template -->
<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!--  -->



<!-- tests -->
