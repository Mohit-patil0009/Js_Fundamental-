
// let arr = [1, 2, 3, 4, 5, null, , ,];

//  length : to get array length

let length = arr.length;
console.log("🚀 ~ length:", length);



// push : to add/push element in last
// let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr);
arr.push(6, 8);
console.log("🚀 ~ arr:", arr);



// pop : to remove element in last

// let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr)

arr.pop() // [1, 2, 3, 4]
arr.pop() // [1, 2, 3]
arr.pop() // [1, 2]
arr.pop() // [1]
console.log("🚀 ~ arr:", arr)



// shift : remove element in start

// let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr)
arr.shift()
console.log("🚀 ~ arr:", arr)



// unshift : add element in start

// let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr);
arr.unshift(-1, 0);
console.log("🚀 ~ arr:", arr);



// slice : to get sub array by giving start and end point

// let arr = [1, 2, 3, 4, 5];

// first index inclusive , 2nd index exclusive
// let subArray = arr.slice(0,2)
let subArray = arr.slice(2)
console.log("🚀 ~ arr:", arr)
console.log("🚀 ~ subArray:", subArray)



// splice : to add/remove elements in array at any point

// let arr = [1, 2, 3, 4, 5];

// update
// arr.splice(2,2,30)// start from 2, remove 2 , add 30
// arr.splice(2,2,30,40)// start from 2, remove 2 , add 30, 40

// add
// arr.splice(2, 0, 2.5);  // start from 2, remove 0(nothing), add 2.5

// remove 
arr.splice(2,2) // start from 2 , remove 2, add nothing

console.log("🚀 ~ arr:", arr);




// indexof/lastIndexOf : give the index of given element
// let arr = [1, 2, 3, 4, 5, 3];

let index = arr.indexOf(3); // check from starting and return give first matching element's index, if not avilable return -1
let lastIndex = arr.lastIndexOf(3); // check from ending and return give first matching element's index, if not avilable return -1
console.log("🚀 ~ lastIndex:", lastIndex)
console.log("🚀 ~ index:", index);



// reverse() – reverses the existing array and also return new reverce array
let arr = [1, 2, 3, 4, 5];

let reverceArray = arr.reverse()
console.log("🚀 ~ arr:", arr)
console.log("🚀 ~ reverceArray:", reverceArray)







