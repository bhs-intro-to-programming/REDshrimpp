// Write your code here. To run a function on a given test file you need to
// create a file in your github repo in the advent-of-code branch and in the
// advent-of-code directory. Then you can use a function `run` to run a
// particular function on the contents of the file, which will be passed to your
// function as a string.
//
// For example, if I've created a file 'day_01.test' to contain the test data
// from day 1, and a function, day01Part1, I can run the function with this
// call:
//
//   run('day_01.test', day01Part1)
//
// Which will load the file and pass them to your function and then print the
// return value in the REPL.

const lines = (longString) => {
  return longString.split('\n');
}

const numbers = (strings) => {
  let array = []
  for(let x = 0;x < strings.length; x++) {
    array.push(strings[x])
  }
  return array
}

const numberSplit = (numberString) => {
  return Number.parseInt(numberString)
}

const countCalories = (text) => {
  const seperateStrings = lines(text);
  const array = numbers(seperateStrings)
  const seperateNumbers = numberSplit(array)
  return seperateNumbers;
}

//run('day_01.test', day01Part1)
run('adventDay1', countCalories);