// function marks (mark){
//     if(mark >= 0 && mark <= 36){
//     console.log(`🚀 ~ Student ${mark} fail  ~ :` )
//     }else if(mark >= 37 && mark <= 50){
//     console.log(`🚀 ~ Student marks ${mark} and grad is ~ D:`)
//     }else if(mark >= 51 && mark <= 70){
//     console.log(`🚀 ~ Student marks ${mark} and grad is ~ c:`)
//     }else if(mark >= 71 && mark <= 80){
//     console.log(`🚀 ~ Student marks ${mark} and grad is ~ B:`)
//     }else if(mark >= 81 && mark <= 90){
//     console.log(`🚀 ~ Student marks ${mark} and grad is ~ A:`)
//     }else if(mark >= 91 && mark <= 100){
//     console.log(`🚀 ~ Student marks ${mark} grad is ~ A+:`)
//     }else{
//         if(mark > 100 || mark < 0){
//             console.log(`🚀 ~ invalid marks ~ :${mark}`)
//         }
//     }
// }
// marks(101);
// let mark = require("readline");

// function marks(mark){
// switch (true) {
//     case (mark >= 0 && mark <= 36):
//         console.log(`🚀 ~ Student ${mark} fail  ~ :`)
//         break;
//     case (mark >= 37 && mark <= 50):
//         console.log(`🚀 ~ Student marks ${mark} and grad is ~ D:`)
//         break;
//     case (mark >= 51 && mark <= 70):
//         console.log(`🚀 ~ Student marks ${mark} and grad is ~ c:`)
//         break;  
//     case (mark >= 71 && mark <= 80):
//         console.log(`🚀 ~ Student marks ${mark} and grad is ~ B:`)
//         break;
//     case (mark >= 81 && mark <= 90):
//         console.log(`🚀 ~ Student marks ${mark} and grad is ~ A:`)
//         break;
//     case (mark >= 91 && mark <= 100):
//         console.log(`🚀 ~ Student marks ${mark} and grad is ~ A+:`)
//         break;
//     default:
//         if(mark > 100 || mark < 0){
//                 console.log(`🚀 ~ invalid marks ~ :${mark}`)
//             }
// }
// }
// marks();

let arr = [
    {max : 36,min :0, grade :'fail'},
    {max : 50,min :37, grade :'E'},
    {max : 60,min :51, grade :'D'},
    {max : 70,min :61, grade :'C'},
    {max : 80,min :71, grade :'B'},
    {max : 90,min :81, grade :'A'},
    {max : 100,min :91, grade :'A+'},
    // {max : 500,min :101, grade :'number to be grater than 100'},
];

function getGrade(marks , arr){
    for(let i=0; i<arr.length; i++){
        if(marks >= arr[i].min && marks <= arr[i].max){
            console.log(`Grade is : ${arr[i].grade}`);
            return ;
        }else if(marks < 0 || marks > 100){
            console.log(`Invalid Marks : ${marks}`);
            return ;
        }

      
}
}
getGrade(101,arr);