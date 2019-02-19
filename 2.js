// function Student (name){
//     this.name=name;
// }
// Student.prototype.sleep= function() {
//     return 'zzz';
// }
class Person{
    constructor(){
        this.type='human'
    }
}

class Student extends Person {  
    constructor (name){
        this.name=name;
    }
    sleep(){
        return 'zzzz';
    }
    getName(){
        return this.name;
    }
}
var billy = new Student('Billy');


console.log(billy);


