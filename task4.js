// find bigest number from array by using for loop finBigNumbr(arr)
let arr = [1, 2, 3, 4, 5];
function biggestNumber(arr){
    let bigValue = 0;
    for(let i = 0; i < arr.length; i++){  
        if(arr[i] > bigValue)
            bigValue = arr[i];
    }
    console.log(bigValue);
}

biggestNumber(arr);

// - find smallest number from array by using for loop finBigNumbr(arr)
let arr2 = [1,2,3,5,4,5,6,7,8,9,10];
function smallValue(arr2){
    let smallVal = arr2[0];
    for(i = 0; i<arr2.length; i++){
        if(arr2[i] < smallValue){
            smallVal = arr2[i];
        }
    }
    console.log(smallVal);
}
smallValue(arr2);


// -dynamic findNumber(arr) => big, small
let arr3 = [1,2,3,4,5,6,7,8,9,10];
function dynamicValue(arr3 , value){
    if(value== "bigest"){

        let bigValue = 0;
    for(let i = 0; i < arr3.length; i++){  
        if(arr3[i] > bigValue)
            bigValue = arr3[i];

    }
    console.log(bigValue);   
    }else if(value == "smallest"){
        
    let smallVal = arr3[0];
    for(i = 0; i<arr3.length; i++){
        if(arr3[i] < smallVal){
            smallVal = arr3[i];
        }
    }
    console.log(smallVal);
    
    }else{
        console.log("Invalid Input");
    }
}

dynamicValue(arr3 , "smallest")


// avaregae of array => [10,2,3,4,5] => 10+2+3+4+5 => 24 => 24/5 => 4.8
let arr4 = [1,2,3,4,5];
function findAverage(arr){
    let sum = 0;
    let average = 0;
    for(let i = 0; i<arr4.length; i++){
        sum = sum + arr4[i];
        average = sum / arr4.length;
    }
    console.log(average);
}
findAverage(arr4);





