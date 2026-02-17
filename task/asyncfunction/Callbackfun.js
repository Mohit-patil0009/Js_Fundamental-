// function fun(cb) {
//   console.log("--main--->");
//   cb();
// }
// // call back function means a function which is passing in another function as a argument.

// function callBack() {
//   console.log("----callback---->");
// }

// fun(callBack);
// fun(()=>{
//       console.log("----callback---->");
// });

// cb > cb > cb >

// call back hell means nested call back

// ()={
//     ()=>{
//         ()=>{
//             ()=>{
//             }
//         }
//     }
// }


function worker(final){
    console.log("--------workerfunction")
    final();
}

function finalcall(){
    console.log("------------finalcalls")
}

worker(finalcall)