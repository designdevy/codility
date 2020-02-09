/* Chapter 1 Iterations */

/* 1.1 For loops */

/* If you want to repeat some operations a given number of times, or repeat them for each
element in some collection, a “for” loop is the right tool to use. */

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }


// let factorial = 1
// let n = 5
// for (let i = 1; i <= n; i++) {
//   console.log(factorial *= i)
// }


// let string = ''
// let n = 4
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += '*'
//   }
//   string += '\n'
// }
// console.log(string)


// let string = ''
// let n = 4
// for (let i = n; i > 0; i--) {
//   for (let j = n - i; j > 0; j--) {
//     string += ' '
//   }
//   for (let j = 2 * i - 1; j > 0; j--) {
//     string += '*'
//   }
//   string += '\n'
// }
// console.log(string)

/* 1.2 While loops */

/* If the number of steps is not known in advance, or the values over which we loop are generated one by one,
and are thus not known in advance either, we use while loop */

// let result = 0
// let n = 100
// while (n > 0) {
//   // console.log(n)
//   n = Math.floor(n / 10)
//   // console.log(n)
//   result += 1
// }
// console.log(n)
// console.log(result)


// let a = 0
// let b = 1
// let n = 12
// while (a <= n) {
//   console.log(a)
//   let c = a + b
//   a = b
//   b = c
// }


// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// for (day of days) {
//   console.log(day)
// }
// for (day in days) {
//   console.log(days[day])
// }

/* Challenge */

/* Binary Gap */

// function binaryGap(n) {
// }

// let n = 37
// string = n.toString(2)
// let gaps = 0
// for (char in string) {
//   console.log(string[char])
//   if (char > 0) {
//     if (string[char] !== '0') {
//       gaps += 1
//     }
//   }
// }
// console.log(gaps)

// look for the first 1
// from here every 1 is beginning and end of a gap
// check the next bit
// if it is a zero we increment the current gap by 1
// if not then we end the current binary gap
// we compary the biggest with the current
// if current is bigger we make it the biggest or we leave the biggest as is






let n = 1041
string = n.toString(2)

let currentGap = 0
let biggestGap = 0
let gapStart = false

console.log('')
console.log(string)
console.log('')

for (let i = string.length; i > 0; i--) {
  if (string[i - 1] === '1') {
    if (currentGap > biggestGap) {
      biggestGap = currentGap
    }
    console.log('current', currentGap)
    gapStart = true
    currentGap = 0
  } else if (string[i - 1] === '0') {
    if (gapStart === true) {
      currentGap += 1
    }
  }
}

console.log('biggest', biggestGap)
