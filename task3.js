
// TASK
// use index of and last index of and check there is a copy elemenet avilable in array or not

// let arr = [1, 2, 3, 4, 5, 3];
// let element = 3
// function(arr,element) // return the message => 3 is available more then 1 time
// let element = 2
// function(arr,element) // return the message => 2 is available only 1 time


let arr = [1, 2, 3, 4, 5, 3];
// let element = 5;
function checkElement(arr, element) {
    if(arr.indexOf(element) !== arr.lastIndexOf(element) )
    {
        console.log(`${element} is available more then 1 time`);
    }
    else {
        console.log(`${element} is available only 1 time`);
    }
    
}
checkElement(arr,3);      