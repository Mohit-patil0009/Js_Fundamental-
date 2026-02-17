// Q1.Ek array [10, 20, 30, 40] diya hai.
// for loop se sabhi numbers ka sum calculate karo.

// let arr = [10,20,30,40,50]
// let sum = 0
// for(let i=0 ; i<arr.length ; i++){
//     sum = sum + arr[i]
// }
// console.log("🚀 ~ sum:", sum)

// Q2. Ek string "hello world" di gayi hai.
// First letter ko uppercase karo
// 👉 Output: "Hello World"

let string = "hello world urvish";

let ans = ""; // => hello  string[i] => string[i-1]
// "Hello World Urvish"

// for (let i = 0; i < string.length; i++) {
//   if (string[i - 1] === " " || i === 0) {
//     ans = ans + string[i].toUpperCase();
//   } else {
//     ans = ans + string[i];
//   }
// }
// for (let i = 0; i < string.length; i++) {
//   let x =
//     string[i - 1] === " " || i === 0 ? string[i].toUpperCase() : string[i];

//   ans = ans + x;
// }

// console.log("🚀 ~ ans:", ans);

// Q3.
// Ek array [5, 12, 8, 130, 44] diya hai.
// Sirf 50 se chhote numbers ko new array me store karo
// Result print karo
// (Hint: condition + loop / array method)

// let arr = [5, 12, 8, 130, 44]
// for(let i=0; i<arr.length; i++){
//     let final = arr[i]
//     if(final < 50)
//     console.log("🚀 ~ final:", final)
// }

// Q4.
// Ek string "programming" di gayi hai.

// Count karo kitni baar "g" aata hai

// Final count print karo

// let str = "programming"
// let final = str.split("")
// console.log("🚀 ~ final:", final)
// let count = 0
// for(let i=0; i<final.length;i++){
//     if(final[i] === "g"){
//         count++
//     }
//     // console.log("g",final)
// }
// console.log("total g",count)

// Q5.
// Ek array ["apple", "banana", "cherry"] diya hai.

// Har element ke aage "fruit: " add karo => using map
//  Output: ["fruit: apple", "fruit: banana", "fruit: cherry"]

// let arr = ["apple", "banana", "cherry"]

// let final = arr.map( (ele) => {
//     return "fruit :" + ele
// })
// console.log(final)

// Q6.
// Ek array [1, 2, 3, 4, 5, 6, 7, 8] diya hai.
// Even numbers ka square nikaalo
// Sirf squared even numbers ko new array me store karo

// 👉 Output: [4, 16, 36, 64]
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(new1 of arr){
//     if(new1 % 2 == 0){
//         console.log("arr no :-",new1," :" ,new1*new1 )
//     }
// }

// Q7.
// Write a function that:
// given array [1,2,3,4,2,3,5]
// return [1,2,3,4,5]
// Takes an array of numbers
// Creates a new array containing only unique values
// Do NOT use Set

// let arr = [1, 2, 3, 4, 5, 3, 2];
// let new1 = [];

// for (let i = 0; i < arr.length; i++) {
//   let first = arr.ind;
// }
// console.log("all values",new1)
// let arr = [1,2,3,4,2,3,5] => aar[i] => 1 => newArr.include(1) => newaArr.push(1)
// let newArr = []

// for(let i = 0; i<arr.length; i++){
//     let first = arr.indexOf(arr[i])
//     let last = arr.lastIndexOf(arr[i])

//     if(first === last){
//         newArr.push(arr[i])
//     }
// }
// console.log("🚀 ~ newArr:", newArr)
