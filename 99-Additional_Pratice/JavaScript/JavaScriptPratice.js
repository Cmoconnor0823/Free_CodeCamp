//1. Write out a for-loop to print to the console the numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i, " #1");
}

//2. Write out a for-loop to print to the console all odd numbers between one and 100.
for (var i = 1; i <= 100; i += 2) {
    console.log(i, " #2");
}

//3. Write out a for-loop to print to the console a multiplication table of 7 from 1 - 10. 
//ex:
//	7 * 1 = 7, 7 * 2 = 14, 7 * 3 = 21 ect…

for (var i = 1; i <= 10; i++) {
    console.log("7 * " + i + "=" + 7 * i, " #3")
}


//4.Write out a function to print to the console a multiplication table with any number from 1 to 10.

//ex:
//	n * 1 = n * 1, n * 2 = n*2 , n * 3 = n * 3 ect…
function printTable(n) {
    for (var i = 1; i <= 10; i++) {
        var row = n + "*" + i + "=" + n * i;
        console.log(row, " #4")
    }
}

printTable(10);

// 5. Calculate the sum of all numbers from 1 to 10.
function sum() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        console.log(sum += i, " #5");
    }
}
sum()
// 6. Calculate 10! Remember in math the (!) is the factorial sign. 
// ex: 4! simply means that we are taking the product of 4×3×2×1.
function factorial() {
    var prod = 1;
    for (var i = 1; i <= 10; i++) {
        console.log(prod *= i, " #6");
    }
}
factorial()

// 7. Calculate the sum of even numbers greater than 10 and less than 30.
function numSeven() {
    var sum = 0;
    for (var i = 11; i <= 30; i += 2) {
        console.log(sum += i, " #7");
    }
}
numSeven()
// 8. Create a function that will convert from Celsius to Fahrenheit. Remember the formula is (0°C × 1.8) + 32 = 32°F
function celsiusToFahrenheit(cel) {
    var ans = cel * 1.8 + 32;
    console.log(ans, " #8");

}
celsiusToFahrenheit(0)


// 9. Create a function that will convert from Fahrenheit to Celsius Remember the formula is (0°C × 1.8) + 32 = 32°F
function fahrenheitToCelsius(fahr) {
    var ans = (fahr - 32) / 1.8;
    console.log(ans, " #9");

}
fahrenheitToCelsius(100)

// 10. Calculate the sum of numbers in an array of numbers. 
// Example array:
// [2, 3, -1, 5, 7, 9, 10, 15, 95]
// Expected output:
// 145
function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum, " #10");

}
sumArr([2, 3, -1, 5, 7, 9, 10, 15, 95])

// 11. Calculate the average of the numbers in an array of numbers 
//Example array:
//[1, 3, 9, 15, 90]
//Expected output:
//23.6

function avgArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum / arr.length, " #11");

}
avgArr([1, 3, 9, 15, 90])

// 12. Create a function using a "for" loop that receives an array of numbers as argument and returns an array containing only the positive numbers
// for an added challenge try refactoring your code using a for of loop or a filter method

function posArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr, " #12");

}
posArr([2, 3, -1.6, 5, 7.3, 9, -10, 15, 95, -45])

// 13. Find the maximum number in an array of numbers 

function maxArr(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max, " #13");

}
maxArr([2, 3, -1.6, 5, 7.3, 9, -10, 15, 95, -45])

// 14. Print the first 10 Fibonacci numbers without recursion. Reminder: F(0) = 0 F(1) = 1 F(n) = F(n-1) + F(n-2)

function fibb(arr) {
    var f0 = 0;
    var f1 = 1;

    for (var i = 2; i < 10; i++) {
        var fi = f1 + f0;

        f0 = f1;
        f1 = fi
        console.log(fi, " #14");
    }
}
fibb()

// 15. Create a function that will find the nth Fibonacci number using recursion  Reminder: F(0) = 0 F(1) = 1 F(n) = F(n-1) + F(n-2)

function findFibb(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1;
    } else {
        return findFibb(n - 1) + findFibb(n - 2);
    }
}
findFibb(9)
console.log(findFibb(10), "#15")

// 16. Create a function that will return a Boolean specifying if a number is prime. 

function isPrime(n) {
    if (n < 2) {
        return false
    }
    if (n == 2) {
        return true
    }
    var maxDiv = Math.sqrt(n);
    for (var i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(18), isPrime(7), "#16");

// 17. Write a function that calculates the sum of digits of a positive integer number. 

function sumDigits(n) {
    var s = n.toString();
    var sum = 0;

    for (char of s) {
        var digit = parseInt(char);
        sum += digit;
    }
    return sum;
}
var test = sumDigits(12345231)
console.log(test, " #17")

// 18. Write a function that prints out the first 100 prime numbers. 

//Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n <= nPrimes) {
        if (isPrime(i)) {
            console.log(n, "--> ", i, " #18");
            n++;
        }
        i++;
    }
}

// Returns true if a number is prime

function isPrime(n) {
    if (n < 2) {
        return false
    }
    if (n == 2) {
        return true
    }
    var maxDiv = Math.sqrt(n);
    for (var i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

printPrimes(100)

// 19. Create a function that will return in an array the first "nPrimes" prime numbers greater than a number "startAt"

//Function prints the first nPrimes numbers
function getPrimes(nPrimes, startAt) {
    var arr = [];
    var i = startAt;

    while (arr.length <= nPrimes) {
        if (isPrime(i)) {
           arr.push(i)            
        }
        i++;
    }
    return arr;
}

// Returns true if a number is prime

function isPrime(n) {
    if (n < 2) {
        return false
    }
    if (n == 2) {
        return true
    }
    var maxDiv = Math.sqrt(n);
    for (var i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(getPrimes(10, 100), " #19")

// 20. Create a function that rotates an array to the left 1 position. 

function rotateLeft(arr){
    var first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(rotateLeft([1,2,3,4,5]), " #20");

// 21. Rotate an array to the right 1 position 
// 22. Reverse an array 
// 23. Reverse a string 
// 24. Create a function that will merge two arrays and return the result as a new array 
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements 
// 28. Calculate the sum of first 100 prime numbers and return them in an array 
// 29. Print the distance between the first 100 prime numbers 
// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string. 
// 31. Create a function that will return the number of words in a text 
// 32. Create a function that will capitalize the first letter of each word in a text 
// 33. Calculate the sum of numbers received in a comma delimited string 
// 34. Create a function that returns an array with words inside a text. 
// 35. Create a function to convert a CSV text to a “bi-dimensional” array 
// 36. Create a function that converts a string to an array of characters 
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character 
// 38. Create a function that will convert an array containing ASCII codes in a string 
// 39. Implement the Caesar cypher 40. Implement the bubble sort algorithm for an array of numbers 
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates 
// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting 
//43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number 
//44. Create a function that will convert a string containing a binary number into a number 
//45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels) 
//46. Find the maximum number in a jagged array of numbers or array of numbers 
//47. Deep copy a jagged array with numbers or other arrays in a new array 
//48. Create a function to return the longest word in a string 
//49. Shuffle an array of strings 
//50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
//51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences. 
//52. Calculate Fibonacci(500) with high precision (all digits) 
//53. Calculate 70! with high precision (all digits)
