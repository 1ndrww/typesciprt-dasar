const getName = ():string => {
   return "hello, my name is Nusendra"
}

console.log(getName())

const getAge = (testing: number):number => {
   return testing
}

console.log(getAge(123))

const multiply = (val1 :number, val2:number) : number =>{
   return val1 * val2
}

console.log(multiply(5,5))

const noreturn = () : void =>{
   console.log("no return")
}

noreturn();

//function as types
type Tambah = (val1:number, val2:number) => number;

const Add : Tambah = (val1:number,val2:number) :number =>{
   return val1 * val2;
}
console.log(Add(2,5))