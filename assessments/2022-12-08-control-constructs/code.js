const emit = (a, b) => console.log(a + ', ' + b);

//1
const yesIfEven = (number) => {
  return number % 2 === 0
}

//2
const countXs = (string) => {
  let result = 0
  for (let x = 0; x < string.length; x++) {
    if (string[x] === 'x') {
      result++
    }
  }
  return result
}

//3
const timesTable = (number) => {
  for (let x = 0; x < number; x++) {
    console.log('foobar')
  }
}

//4
const containsX = (string) => {
  return countXs(string) !== 0
}

//5
const sumSquares = (number) => {
  for (let x = 0; x < number; x++) {
    console.log(x)
  }
}