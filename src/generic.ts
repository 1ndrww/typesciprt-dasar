function getData(value:any){
   return value;
}

console.log(getData("Nusendra").length)
console.log(getData(123).length)

//generic
function myData<T>(value:T) {
   return value
}

console.log(myData("Nusendra").length)
console.log(myData(123));

const arrowFunc = <T> (value:T) =>{
   
}