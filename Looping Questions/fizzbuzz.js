/* 
Write a program that shows all numbers between 1 and 100 with following exceptions:
    It shows "Fizz" instead of the number is divisible by 3.
    It shows "Buzz" instead of the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers
divisble both by 3 and by 5.

*/

// First write a loop that prints out 1 to 100 numbers. *FINISHED*

for (let i = 0; i <= 100; i++) {
    console.log(i);
    // Second: Show the string "Fizz" instead of the number if it is divisible by 3.
    if ( i % 3 === 0 ) {
        i = "Fizz";
    } else {
        console.log(i)
    }
}