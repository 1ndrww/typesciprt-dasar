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

//default paramater
const multiply_default_paramter = (val1 :number, val2:number = 123) : number =>{
   return val1 * val2
}
//optional paramater
const multiply_optional_paramter = (val1 :string, val2?:string) : string =>{
   return val1 + val2;
}