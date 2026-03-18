

//function myFun () {return 'Hello world'}

// function myFun (){
//     return 'Hello world'
// }

// const myFun = (x, y) =>{
//     return x + y
// }
//onsole.log(myFun(10 ,20))

// function sayHello (name){
//     return 'Rajib' + name
// }

// let fullName = sayHello('raj')

// console.log(fullName)

function myMap(arr, cal) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    result.push(cal(arr[i], i));
  }

  return result;
}

// test
console.log(myMap([1,2,3], x => x * 2)); // [2,4,6]