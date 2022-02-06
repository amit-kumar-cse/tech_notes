### 2.3.3 The Char type

Single vs double quote
```java
class Test {
    void methodName() {
        char a = 'a';
        String b = "b";  //single vs double quote string.
    }
}
```

Values of char can be expresses as hexadecimal values that run from \u0000 to 
\uFFFF. e.g.
* \u2122 is Trademark symbol <sup>TM</sup>

Besides the \u escape sequences, there are several escape sequences for special 
characters
* \b - Backspace
* \t - Tab
* \\" - double quote
* \\' - single quote
* \\\ - backslash

### 2.3.4 Unicode and the Char type
* Universal character code, (There were many before, Ascii etc)
* Read about unicode from here, if required.
* In Java, A char type describes a code unit in the UTF-16 encoding.
* Our strong recommendation is not to use the char type in your programs unless you are actually manipulating the 
UTF-16 code units.

### 2.3.5 The boolean type
```java
class Test {
    void methodName() {
        boolean x = true;
    }
}
```

## 2.4 Variables and constants

### 2.4.1. Declaring variables

* Do not use reserved words
* camelCase
* The programs are easier to read if you write each variable on a new line.
```java
class Test {
    void methodName() {
        int i, j; // not good
        
        int i;
        int j; //good
    }
}
```
### 2.4.2 Uninitialized variables.
* It is an error if you try to use un-initialized variable.
```java
int vacationDays;
print(vacationDays); //error
```
* you do not need to declare the variables at the beginning of the block. 
In java, it is best practice to declare them as close to first usage as possible.
* From java 10, you can use var instead of the actual data type while declaring.
```java
var x = 10;
print(x);
```

### 2.4.3 Constants

* final keyword to denote constants.
  * Are they compile time constants or run time constants
```java
final double CM_PER_INCH = 2.54;
CM_PER_INCH = 3; //ERROR
```
* Best way to define constant through classes
```java
public class ConversionUnits {
    public static final double CM_PER_INCH = 2.54;
    
    public static void main (String[] args) {
        
    }
}

//usage outside
System.out.println(ConversionUnits.CM_PER_INCH);
```

### 2.4.4 Enumerated types
* When a variable can only hold a restricted set of values
```java
public enum Size {SMALL, MEDIUM, LARGE, EXTRA_LARGE};

Size s = Size.SMALL;
s = null; // to indicate that variable is not set to any value at all
```

## 2.5 Operators

### 2.5.1 Arithmetic operators
- \+
- \-
- \*
- \\ - results in integer if both arguments are integers, but floating point division otherwise.
- \% - modulo operator - 15%2  = 1
- use of stritfp (strict floating point should be read when you want to have exactly same result across different hardware architectures.)

### 2.5.2 Mathematical functions and constants

* Use Math class.
```java
class Test {
    void methodName() {
        double result = Math.sqrt(4);
        double result1 = Math.pow(2, 4);
        // % may be -ve value sometimes.
        double positiveRemainder = Math.floorMod(-1, 12); //11
        //Math.sin
        //Math.cos
        Math.PI;
        Math.E;
    }
}
```
* https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html
* you can avoid the Math prefix by this import
```java
import static java.lang.Math.*;
```
### 2.5.3 Conversions between numeric types

* Best revised from the book, make notes here later.

### 2.5.4 Casts

* Conversions in which loss of info is possible are done through casting.
```java
double x = 9.997;
int nx = (int) x;
```
* Rounding a floating point number to nearest integer
```java
double x = 9.997;
int rounded = (int) Math.round(x);
```
* When there is no possiblity of into loss
```java
int x = 9;
long y = x;
```
### 2.5.5 Combining assignments with operators
```java
int x = 5;
x += 3;
//it is equivelent to 
x = (int) (x+3);
```
### 2.5.6 Increment and Decrement operators
* ++x;
* x++;
* --x;
* x--;

### 2.5.7 Relational and boolean operators

* == - equality
* != 
* <
* <=
* \>
* \>= 
* &&
  * x && y - y is not evaluated is x is false/
* ||
  * x || y - y is not evaluated if x is true
* x < y ? x : y;

### 2.5.8 Bitwise operators

* Do as required

### 2.5.5 Parenthesis and Operator Hierarchy

* Do as required
