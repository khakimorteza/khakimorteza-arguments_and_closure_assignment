//1.
// const double = (num) => {
//   return num * 2;
// }
//
// console.log(double(2));
//
// const square = (num) => {
//   return num * num;
// }
//
// console.log(double(3));
//
// const doubleSquare = (num) => {
//   let newNum = double(num)
//   let result = square(newNum)
//   return result
// }
//
// console.log(doubleSquare(5));

//2.
// const classyGreeting = (firstName, lastName) => {
//   return `Hello, ${firstName} ${lastName}`;
// }
//
// console.log(classyGreeting('Morteza', 'Khaki'));



// const yell = (str) => {
//   return str.toUpperCase();
// }
//
//  console.log(yell('morteza'));
//
//  const yellGreeting = (firstName, lastName) => {
//    let yellG = classyGreeting(firstName, lastName)
//    let newyellG = yell(yellG)
//    return newyellG;
//  }
//
// console.log(yellGreeting('Morteza', 'Khaki'));

 //3.
// const removeDupes = (arr) => {
//   let output = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1
//       output.push(arr[i])
//     }
//   }
//
//   return output;
// }
//
// console.log(removeDupes(["A","B","C","D","A","C"]));
//
//
// const concatAndRemoveDupes = (a, b) => {
//   let c = [...a , ...b]
//   return removeDupes(c);
// }
//
// console.log(concatAndRemoveDupes([1, 2, 3], [2, 3, 4, 5]));




//5
//
// const repeat = (str, numtimes = 2) => {
//   for (let i = 0; i <= numtimes; i++) {
//     array[i]
//   }
// }


//7.

//
// const adder = (...arg) => arg[0] += arg[1]
//   let add5 = a => adder(a, 5)
//
//



 //4.
//  let grades = [91, 85, 100, 92, 88]
//
// function sort(arr) {
//   arr.sort(function(a,b)){
//     return a - b
//   }
//
// }

const sort = arr => arr.sort((a,b) => a - b);

const middleElement = (arr) => {
  let mid = Math.floor(arr.length / 2)
  return (arr.length% 2) ? (arr[mid]) : ((arr[mid]+ arr[mid-1])/2)
}

const median = grades => middleElement(sort(grades));
console.log(median([91, 85, 100, 92, 88]));



// cost greeting = (...args) => {
//   return `Hello`;
// }
