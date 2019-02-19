function creaeteStudent(name){
    var student ={
        name: name
        
    }
    Object.setPrototypeOf(student, studentProto);
    return student;
}
 var studentProto={
    sleep: function(){
        return 'zzzz'
    }

 }

var billy = creaeteStudent('billy');

var willy= creaeteStudent('willy');


console.log(billy.sleep());


console.log(willy);
