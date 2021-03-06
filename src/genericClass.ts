class List<T> {
   private data:T[]

   constructor(...elements : T[]) {
      this.data = elements
   }
   add(element:T): void {
      this.data.push(element);
   }
   addMultiple(...elements: T[]):void {
      this.data.push(...elements)
   } 

   getAll(): T[] {
      return this.data
   }
}

let numbers = new List<number>(1,2,3)
numbers.add(4)
numbers.addMultiple(5,6,7)
console.log(numbers.getAll())

let random = new List<number|string>(1,2,"234")
random.add("tes")
random.add(123)
random.addMultiple(231,"123")
console.log(random.getAll())