// profile link: https://edabit.com/user/zP84vhK6yKs3q7xtk

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// All you have to do is type return true; between the curly braces and click the Check button. If everything went according to plan, the button will turn red and say SUBMIT FINAL. Click it and see what happens.
public class Program {
    public static boolean returnTrue() {
      return true;
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
        assertEquals(true, Program.returnTrue());
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes an integer as its only argument and returns true if it's less than or equal to zero, otherwise return false.
public class Program {
    public static boolean lessThanOrEqualToZero(int num) {
    	if (num <= 0) {
			return true;
		} else {
			return false;
		}
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
        assertEquals(false, Program.lessThanOrEqualToZero(5));
    }

    @Test
    public void test2(){
        assertEquals(true, Program.lessThanOrEqualToZero(0));
    }

    @Test
    public void test3(){
        assertEquals(true, Program.lessThanOrEqualToZero(-5));
    }

    @Test
    public void test4(){
        assertEquals(false, Program.lessThanOrEqualToZero(1));
    }

    @Test
    public void test5(){
        assertEquals(false, Program.lessThanOrEqualToZero(2));
    }

    @Test
    public void test6(){
        assertEquals(false, Program.lessThanOrEqualToZero(10000));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes two integers as arguments and return their sum.
public class SumOfTwoNumbers {
    public static int sum(int a, int b) {
    	return a + b;
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SumOfTwoNumbersTest {

    @Test
    public void test1(){
        int expected = 5;
        int actual = SumOfTwoNumbers.sum(3, 2);
        assertEquals(expected, actual);
    }

    @Test
    public void test2(){
        int expected = -9;
        int actual = SumOfTwoNumbers.sum(-3, -6);
        assertEquals(expected, actual);
    }

    @Test
    public void test3(){
        int expected = 10;
        int actual = SumOfTwoNumbers.sum(7, 3);
        assertEquals(expected, actual);
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes an integer as an argument and returns"even" for even integers and "odd" for odd integers.
public class Program {
    public static String isEvenOrOdd(int num) {
    	if(num % 2 == 0 || num == 0) {
		  	return "even";
		} else {
		  	return "odd";
		}
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
      assertEquals("odd", Program.isEvenOrOdd(3));
    }
    @Test
    public void test2(){
      assertEquals("even", Program.isEvenOrOdd(0));
    }
    @Test
    public void test3(){
      assertEquals("odd", Program.isEvenOrOdd(7));
    }
    @Test
    public void test4(){
      assertEquals("even", Program.isEvenOrOdd(12));
    }
    @Test
    public void test5(){
      assertEquals("even", Program.isEvenOrOdd(6474));
    }
    @Test
    public void test6(){
      assertEquals("odd", Program.isEvenOrOdd(563));
    }
    @Test
    public void test7(){
      assertEquals("odd", Program.isEvenOrOdd(3));
    }
    @Test
    public void test8(){
      assertEquals("odd", Program.isEvenOrOdd(-3));
    }
    @Test
    public void test9(){
      assertEquals("even", Program.isEvenOrOdd(-6));
    }
    @Test
    public void test10(){
      assertEquals("even", Program.isEvenOrOdd(11111000));
    }
    @Test
    public void test11(){
      assertEquals("even", Program.isEvenOrOdd(-0));
    }
    @Test
    public void test12(){
      assertEquals("odd", Program.isEvenOrOdd(-301));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// There is a single operator in Java capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possiby zero. Return that value.
public class Challenge {
  	public static int myMethod(int a, int b) {
		return a%b;
  	}
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class ProgramTest {

    @Test
    public void test1(){
      assertEquals(1, Challenge.myMethod(7,2));
    }
    @Test
    public void test2(){
      assertEquals(3, Challenge.myMethod(3,4));
    }
    @Test
    public void test3(){
      assertEquals(-9, Challenge.myMethod(-9,45));
    }
    @Test
    public void test4(){
      assertEquals(0, Challenge.myMethod(5,5));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes an array and a string as arguments and return the index of the string.
class FindIndex{
	public static int findIndex(String[] arr,String str) {
	  	int index = 0;
		for (int i=0 ; i<arr.length ; i++) {
		  if (str == arr[i]) {
			index = i;
		  }
		}
	  return index;
	}
}

// tests
import static org.hamcrest.core.Is.is;
import org.junit.Test;
import static org.junit.Assert.assertThat;

public class FindIndexTest {

    @Test
    public void test(){
      assertThat(FindIndex.findIndex(new String[]{"hi", "edabit", "fgh", "abc"}, "fgh"), is(2));
      assertThat(FindIndex.findIndex(new String[]{"Red", "blue", "Blue", "Green"}, "blue"), is(1));
      assertThat(FindIndex.findIndex(new String[]{"a", "g", "y", "d"}, "d"), is(3));
      assertThat(FindIndex.findIndex(new String[]{"Pineapple", "Orange", "Grape", "Apple"}, "Pineapple"), is(0));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//Create a function that takes a two strings and returns true if the first argument ends with the second argument; otherwise return false.
public class Challenge {
  public static boolean checkEnding(String str1, String str2) {

	if (str1.endsWith(str2) == true) {
		return true;
	}
    return false;
  }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class EndingTests {

    @Test
    public void testCase1() {
      assertEquals("Nope!", true, Challenge.checkEnding("abc", "bc"));
    }

    @Test
    public void testCase2() {
      assertEquals("Nope!", false, Challenge.checkEnding("abc", "d"));
    }

    @Test
    public void testCase3() {
      assertEquals("Nope!", false, Challenge.checkEnding("samurai", "zi"));
    }

    @Test
    public void testCase4() {
      assertEquals("Nope!", true, Challenge.checkEnding("feminine", "nine"));
    }

    @Test
    public void testCase5() {
      assertEquals("Nope!", false, Challenge.checkEnding("convention", "tio"));
    }

    @Test
    public void testCase6() {
      assertEquals("Nope!", false, Challenge.checkEnding("cooperative", "ooper"));
    }

    @Test
    public void testCase7() {
      assertEquals("Nope!", true, Challenge.checkEnding("extraterrestrial", "xtraterrestrial"));
    }

    @Test
    public void testCase8() {
      assertEquals("Nope!", true, Challenge.checkEnding("access", "ss"));
    }

    @Test
    public void testCase9() {
      assertEquals("Nope!", false, Challenge.checkEnding("motorist", "is"));
    }

}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes a string as its argument and returns the string in reversed order.
public class ReverseOrder {
  	public static String reverse(final String str) {

	  	StringBuilder sb = new StringBuilder();
		sb = sb.append(str).reverse();

	  	String retStr = sb.toString();

	  	return retStr;
  	}
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class DescendingOrderTest {

    @Test
    public void test_01() {
        assertEquals("Think different.", ReverseOrder.reverse(".tnereffid knihT"));
    }
    @Test
    public void test_02() {
        assertEquals(ReverseOrder.reverse("Think different."), ".tnereffid knihT");
    }
		@Test
    public void test_03() {
        assertEquals(ReverseOrder.reverse("It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."), ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI");
    }
		@Test
    public void test_04() {
        assertEquals(ReverseOrder.reverse("Innovation is the ability to see change as an opportunity - not a threat"), "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI");
    }
		@Test
    public void test_05() {
        assertEquals(ReverseOrder.reverse("Everything is based on a simple rule: Quality is the best business plan."), ".nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE");
    }
    @Test
    public void test_06() {
      assertEquals(ReverseOrder.reverse("The people who are crazy enough to think they can change the world are the ones who do."), ".od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT");
    }
    @Test
    public void test_07() {
      assertEquals(ReverseOrder.reverse("Don’t let the noise of others’ opinions drown out your own inner voice."), ".eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD");
    }
		@Test
    public void test_08() {
        assertEquals(ReverseOrder.reverse("Learn continually; There's always one more thing to learn."), ".nrael ot gniht erom eno syawla s'erehT ;yllaunitnoc nraeL");
    }
		@Test
    public void test_09() {
        assertEquals(ReverseOrder.reverse("Quality is more important than quantity. One home run is much better than two doubles."), ".selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ");
    }
		@Test
    public void test_10() {
        assertEquals(ReverseOrder.reverse("Your time is limited so don't waste it living someone else's life."), ".efil s'esle enoemos gnivil ti etsaw t'nod os detimil si emit ruoY");
    }
		@Test
    public void test_11() {
        assertEquals(ReverseOrder.reverse("The only way to be truly satisfied is to do what you believe is great work."), ".krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT");
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a method that takes a string and returns a string in which each character is repeated once.
import java.lang.*;

public class Program {
    public static String doubleChar(String s) {
      String bsRet = "bs return";
	  StringBuilder sb = new StringBuilder();

	  for (int i=0 ; i<s.length() ; i++) {
		sb.append(s.charAt(i)).append(s.charAt(i));
	  }
	  return sb.toString();
    }
}

// tests
import static org.hamcrest.core.Is.is;
import org.junit.Test;
import static org.junit.Assert.assertThat;

public class ProgramTest {

    @Test
    public void test(){
      assertThat(Program.doubleChar("String"), is("SSttrriinngg"));
      assertThat(Program.doubleChar("Hello World!"), is("HHeelllloo  WWoorrlldd!!"));
      assertThat(Program.doubleChar("1234!_ "), is("11223344!!__  "));
      assertThat(Program.doubleChar("##^&%%*&%%$#@@!"), is("####^^&&%%%%**&&%%%%$$##@@@@!!"));
      assertThat(Program.doubleChar("scandal"), is("ssccaannddaall"));
      assertThat(Program.doubleChar("economics"), is("eeccoonnoommiiccss"));
      assertThat(Program.doubleChar(" "), is("  "));
      assertThat(Program.doubleChar("_______"), is("______________"));
      assertThat(Program.doubleChar("equip gallon read"), is("eeqquuiipp  ggaalllloonn  rreeaadd"));
      assertThat(Program.doubleChar("baby increase"), is("bbaabbyy  iinnccrreeaassee"));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a method that accepts a GregorianCalendar object and returns true if it's Christmas Eve (December 24th) and false otherwise.
import java.util.GregorianCalendar;

public class Program {
    public static boolean timeForMilkAndCookies(GregorianCalendar date) {
	  	int month = date.get(GregorianCalendar.MONTH);
	  	int day = date.get(GregorianCalendar.DAY_OF_MONTH);

	  	if(month == 11 && day == 24) {
		  System.out.println("true --> " + day);
		  return true;
		} else {
		  System.out.println("false --> " + day);
		  return false;
		}
    }
}


// tests
import static org.hamcrest.core.Is.is;
import org.junit.Test;
import static org.junit.Assert.assertThat;
import java.util.GregorianCalendar;

public class ProgramTest {

    @Test
    public void test(){
      assertThat(Program.timeForMilkAndCookies(new GregorianCalendar(2013, 11, 24)), is(true));
      assertThat(Program.timeForMilkAndCookies(new GregorianCalendar(2013, 0, 23)), is(false));
      assertThat(Program.timeForMilkAndCookies(new GregorianCalendar(3000, 11, 24)), is(true));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
class Challenge {
  public static String getMiddle(String word) {
	String bsRet = "bs return";
	int position = 0;
	int length = 0;

	if(word.length() % 2 == 0) {
	  	position = word.length() / 2 - 1;
	  	length = 2;
	} else {
		position = word.length() / 2;
	  	length = 1;
	}

	String result = word.substring(position, position + length);
	return result;

  	}
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import java.util.Random;

public class MiddleTests {
  @Test
  public void basicTests() {
    assertEquals("es", Challenge.getMiddle("test"));
    assertEquals("t", Challenge.getMiddle("testing"));
    assertEquals("dd", Challenge.getMiddle("middle"));
    assertEquals("A", Challenge.getMiddle("A"));
    assertEquals("bi", Challenge.getMiddle("inhabitant"));
    assertEquals("o", Challenge.getMiddle("brown"));
    assertEquals("aw", Challenge.getMiddle("pawn"));
    assertEquals("i", Challenge.getMiddle("cabinet"));
    assertEquals("e", Challenge.getMiddle("fresh"));
  }

  private String middle(String word) {
    int mid = word.length() / 2;
    return (word.length() % 2 == 1 ? word.substring(mid, mid+1) : word.substring(mid-1, mid+1));
  }

  @Test
  public void randTests() {
    Random randGen = new Random();
    String alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (int i = 0; i < 50; i++) {
      int randLength = randGen.nextInt(1000)+1;
      String testWord = "";
      for (int e = 0; e < randLength; e++) {
        int alphI = randGen.nextInt(alph.length());
        testWord += alph.substring(alphI, alphI+1);
      }
      String expected = middle(testWord);
      String actual = Challenge.getMiddle(testWord);
      assertEquals("Middle of " + testWord + " is " + expected + " not " + actual, expected, actual);
    }
  }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a method that takes a string and returns true if the PIN is valid and false if it's not.
public class Program {
    public static boolean validatePIN(String s) {
	  	char[] cArr = s.toCharArray();
	  	boolean result = false;

	  	if (cArr.length == 4 || cArr.length == 6) {
		  	for (int i=0 ; i<cArr.length ; i++) {
			  	result = Character.isDigit(cArr[i]);

			  	if(result == true) {
					return true;
				} else {
				  	return false;
				}
			}
		} else {
		  return false;
		}
	  	return result;
    }
}

// tests
import org.junit.Test;
import static org.junit.Assert.assertThat;

public class ProgramTest {

    @Test
    public void test(){
      assertThat(Program.validatePIN("1234"), is(true));
      assertThat(Program.validatePIN("12345"), is(false));
      assertThat(Program.validatePIN("a234"), is(false));
      assertThat(Program.validatePIN(""), is(false));
      assertThat(Program.validatePIN("%234"), is(false));
      assertThat(Program.validatePIN("`234"), is(false));
      assertThat(Program.validatePIN("@234"), is(false));
      assertThat(Program.validatePIN("#234"), is(false));
      assertThat(Program.validatePIN("$234"), is(false));
      assertThat(Program.validatePIN("*234"), is(false));
      assertThat(Program.validatePIN("5678"), is(true));
      assertThat(Program.validatePIN("^234"), is(false));
      assertThat(Program.validatePIN("(234"), is(false));
      assertThat(Program.validatePIN(")234"), is(false));
      assertThat(Program.validatePIN("123456"), is(true));
      assertThat(Program.validatePIN("-234"), is(false));
      assertThat(Program.validatePIN("_234"), is(false));
      assertThat(Program.validatePIN("+234"), is(false));
      assertThat(Program.validatePIN("=234"), is(false));
      assertThat(Program.validatePIN("?234"), is(false));
    }
}

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//


// tests



































/*                 template              */
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
//


// tests
