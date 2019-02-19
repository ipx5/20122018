 function Student(name){
    this.name= name;

 }

Student.prototype={    // в прототип положили обьект
    sleep: function (){
        return 'zzzzz';
    }
} 

var jim= new Student('jim');


console.log(jim);

console.log(jim.sleep());



