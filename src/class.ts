export class User {
   public name:string;
   constructor(name:string, age:number){
      this.name = name;
   }

   setName(value:string):void {
      this.name = value;
   }
   getName = () :string => {
      return this.name
   }
}

class Admin extends User {
   read: boolean= true
   write: boolean= true
   phone:string
   private _email :string = ""
   static getRoleName : string = "Admin"

   constructor(phone:string, name:string, age:number){
      super(name,age)
      this.phone = phone
   }
   static getNameRole(){
      return "hei"
   }
   getRole(): {read:boolean, write:boolean} {
      return {
         read: this.read,
         write:this.write
      }
   }
   set email(value:string){
      if(value.length < 5){
         this._email = "Email salah"
      } else{
         this._email = value
      }
   }

   get email():string{
      return this._email
   }
}
let admin = new Admin("0852234234","eko", 2345)
admin.getName()
admin.getRole()
admin.setName('das')
admin.getName
admin.phone

admin.email = "testing@gmail.com"
console.log(admin.email)

let static_admin = Admin.getNameRole()



