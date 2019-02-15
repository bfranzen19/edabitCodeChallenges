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

<!--  -->



<!-- tests -->

























<!-- template -->
<!--  -->



<!-- tests -->
