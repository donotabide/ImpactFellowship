// function logOut(array){
// 	for(let i = 0; i < array.length; i++){
// 		console.log(array[i]);
// 	}
// }
//
// logOut(["D", "A", "GAs", "Blob"]);

//------------

// Ternary Statements
// let isBigNumber = (num)=>{
// 	return num > 10;
// }
//
// console.log(isBigNumber(15));
// console.log(isBigNumber(4));

//------------

// Switch

//------------

// Imediatelly calling function
// (()=>{
//
// })()
//

let timesFive = function(number){ return number*5;}

let greaterThanAHundred = function(number, fun){
	return fun(number) > 100;
}

console.log(greaterThanAHundred(10, timesFive));
console.log(greaterThanAHundred(21, timesFive));

console.log(1);
setTimeout(()=>{
	console.log(2)
}, 0);
console.log(3);


// ------------
