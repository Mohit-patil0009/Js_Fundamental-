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

function marks(mark){
switch (true) {
    case (mark >= 0 && mark <= 36):
        console.log(`🚀 ~ Student ${mark} fail  ~ :`)
        break;
    case (mark >= 37 && mark <= 50):
        console.log(`🚀 ~ Student marks ${mark} and grad is ~ D:`)
        break;
    case (mark >= 51 && mark <= 70):
        console.log(`🚀 ~ Student marks ${mark} and grad is ~ c:`)
        break;  
    case (mark >= 71 && mark <= 80):
        console.log(`🚀 ~ Student marks ${mark} and grad is ~ B:`)
        break;
    case (mark >= 81 && mark <= 90):
        console.log(`🚀 ~ Student marks ${mark} and grad is ~ A:`)
        break;
    case (mark >= 91 && mark <= 100):
        console.log(`🚀 ~ Student marks ${mark} and grad is ~ A+:`)
        break;
    default:
        if(mark > 100 || mark < 0){
                console.log(`🚀 ~ invalid marks ~ :${mark}`)
            }
}
}
marks(105);