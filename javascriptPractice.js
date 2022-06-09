// funtion or methodology to revesing a string or number

// let str = "guiter";
// console.log("The original string is " + str);
// let splitStr = str.split("");
// console.log("the split string is " + splitStr);
// let reverseStr = splitStr.reverse();
// console.log("the reverse string is " + reverseStr);
// let joinStr = reverseStr.join("");
// console.log("the join string is " + joinStr);

// let number = 12345;

// console.log(number.toString().split(""));
// number splitting would be return as an array

// now turning this number to the string
// let numberToString = number + "";
// console.log(numberToString);
// console.log(number.toString().split("").reverse().join(""));
// console.log(number.toString().split("").reverse().join(""));

// const str2="guiter"

// let reverseStr=""

// for (let i=str2.length-1;i>=0;i--){
//     reverseStr=reverseStr+str2[i]

// }

// console.log(reverseStr)

// checking whether the string is palindrome or not
// palindrome means if a string remainns same if you reverse it

// var newStr="madama"
// var splitStr2=newStr.split("")
// var reverseStr2=splitStr2.reverse()
// var joinStr=reverseStr2.join("")
// function chackingPalidromeOrNot(){
//     if(joinStr===newStr){
//          console.log("The String is Palindrome")
//     }else{
//         console.log("The string is not Palindrome")
//     }
// }
// checkingPalidromeOrNot()

// const newArr = [6000, 1, 50, 2, 3, 4, 1000, 5, 6, 7, 8, 2000, 9, 500, 5000];

// let largestNumber = newArr[0];
// let secondLargestNumber = 0;

// for (i = 1; i < newArr.length; i++) {
//   if (newArr[i] > largestNumber) {
//     secondLargestNumber = largestNumber;
//     largestNumber = newArr[i];
//   }

//   if (newArr[i] !== largestNumber && newArr[i] > secondLargestNumber) {
//     secondLargestNumber = newArr[i];
//   }
// }
// console.log(largestNumber);
// console.log(secondLargestNumber);

// array of array

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(`Element ${i} ${j} is ` + array[i][j]);
//   }
// }

// array of functions

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

// const funcs = [sum, sub, mul, div, mod];

// const a = 10;
// const b = 20;

// for (let i = 0; i < funcs.length; i++) {
//   const result = funcs[i](a, b);
//   console.log(`[${funcs[i].name}] --- Result=${result}`);
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 0];
// const result = [];
// for (i = 0; i < arr1.length; i++) {
//   result.push(arr1[i] + arr2[i]);
// }
// console.log(result);

// to get the full result in single array

// const newArr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const newArr2 = [
//   [10, 11, 12],
//   [13, 14, 15],
//   [16, 17, 18],
// ];
// const result = [[], [], []];

// for (let i = 0; i < newArr1.length; i++) {
//   for (let j = 0; j < newArr1[i].length; j++) {
//     result.push(newArr1[i][j] + newArr2[i][j]);
//   }
// }
// console.log(result);

// const matrixA = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const matrixB = [
//   [10, 11, 12],
//   [13, 14, 15],
//   [16, 17, 18],
// ];

// const matrixSum = (matrixA, matrixB) => {
//   const result = [];

//   for (let i = 0; i < matrixA.length; i++) {
//     row = [];
//     for (let j = 0; j < matrixA[i].length; j++) {
//       row.push(matrixA[i][j] + matrixB[i][j]);
//     }

//     result.push(row);
//   }
//   return result;
// };

// const matrixC = matrixSum(matrixA, matrixB);
// console.log(matrixC);

function isVowel(char) {
  let vowel = ["a", "e", "i", "o", "u"];

  return vowel.indexOf(char.toLowerCase()) !== -1;
}

var words = ["peanut", "butter", "and", "apple", "jelly"];

for (let i = 0; i < words.length; i++) {
  var word = words[i];
  word += "-";

  var firstLetter = word.charAt(0);

  if (isVowel(firstLetter)) {
    word += "yay";
  } else {
    word += firstLetter;
    word += "ay";
    word = word.slice(1);
  }
  console.log(word);
}
