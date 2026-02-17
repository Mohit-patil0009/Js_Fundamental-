// let obj = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: {},
// };

// let keys = Object.keys(obj);
// console.log("🚀 ~ keys:", keys);

// let values = Object.values(obj);
// console.log("🚀 ~ values:", values);

// let entries = Object.entries(obj);
// console.log("🚀 ~ entries:", entries);

// let names = ["jayesh", "mahesh", "suresh"];
// for (const x of names) {
//   console.log("---->", x);
// }

// let user = {
//   name: "urvish",
//   age: 26,
//   city: "surat",
//   1: "red",
// };

// let keyName = "name"
// console.log("🚀 ~ user.keyName:", user[keyName])

// for (const key in user) {
//   console.log("🚀 ~ key:", key, user[key]);
// }

// let arr = [1, 2, 3, 4, 5];

// first index inclusive , 2nd index exclusive
// let subArray = arr.slice(0,2) // [1,2]
// let subArray = arr.slice(2)
// console.log("🚀 ~ arr:", arr) // [1,2,3,4,5]
// console.log("🚀 ~ subArray:", subArray)

// let arr = [1, 2, 3];
// let availabllity = arr.includes(20)
// console.log("🚀 ~ availabllity:", availabllity)

// let arr = [1, 2, 3];
// let join1 = arr.join() // 1,2,3
// let join2 = arr.join("--") // 1--2--3
// let join3 = arr.join(""); // 123
// console.log("🚀 ~ join:", join1);
// console.log("🚀 ~ join:", join2);
// console.log("🚀 ~ join:", join3);

// let arr = [1, 2, 4, 3, 5, 3];

// let matchEle = arr.find((ele, i) => {
//   console.log("---ele--->", ele, i);
//   //   return ele === 3;
//   //   return i === 3;
//   return i === 5;
// });
// console.log("🚀 ~ matchEle:", matchEle);

// let arr = [1, 2, 3, 4, 5, 3];

// let newArr = arr.map((e) => {
//   console.log("🚀 ~ e:", e);
//   return e + 10 ; // [ 11, 12, 13, 14, 15, 13 ]
// //   return e > 3; // [ false, false, false, true, true, false ]
// });
// console.log("🚀 ~ arr:", arr);
// console.log("🚀 ~ newArr:", newArr);

// let arr = [1, 2, 3, 4, 5, 3];

// let available = arr.some((e) => {
//   return e === 3;
// });
// console.log("🚀 ~ available:", available)

// let str = "Hello world"

// // let subString = str.slice(2,5)
// let subString = str.substring(2,7)
// console.log("🚀 ~ subString:", subString)

// let str = "Hello world";
// // let index = str.indexOf("o",5);
// // let index = str.lastIndexOf("o");
// console.log("🚀 ~ index:", index)

let str = "Hello world,  welcome to the world of JavaScript";

// let arr = str.split("world");
// let arr = str.split(" ");
// let arr = str.split("");
// console.log("🚀 ~ arr:", arr)