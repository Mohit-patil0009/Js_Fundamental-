let num = "";
let arr = [10, 20, 30, 40, 50];

function printArrayElements(arr, num) {
  if (num > arr.length) {
    console.log("🚀 ~ This is a number grater than  this arr ", num);
  } else if (num < 0) {
    console.log("🚀 ~ This is a number less than  this arr ", num);
  } else {
    for (let a = 0; a < num; a++) {
      console.log("🚀 ~ printArrayElements ~ arr:", arr[a]);
    }
  }
}

printArrayElements(arr, 4);
