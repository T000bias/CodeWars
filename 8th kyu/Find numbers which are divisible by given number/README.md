# Instructions (Work in Progress)
 
 Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

```
 Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

```

# Solution #1 Explanation

For this problem we need to use...
- An empty array
- loop
- if statement and
- Modulo operator.

First we should create an empty array variable to store our values that are divisble by the "divisor" argument.

``` js
function divisibleBy(numbers, divisor) {
  let array = [];
}

```

Next, we should be looping thru the array from the "numbers" argument.

``` js

function divisibleBy(numbers, divisor) {
  let array = [];
  for (let index = 0; index < numbers.length; index++) {
  }
}

```

Inside that loop, use the ```console.log``` function to make sure you are going thru that loop properly; this gives you a chance to change your parameters before moving on.

In order for us to add to our empty array we must use the ```push()``` method. This method adds one or more elements to the end of the array, but before we do that, we need a conditional statement to pull out the divisible values.

``` js
function divisibleBy(numbers, divisor) {
  let array = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % divisor == 0) {
      array.push(numbers[index])
    }
  }
}
```


