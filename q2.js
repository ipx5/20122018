
var str=
String.prototype.toJadenCase = function () { 
        var result= str[0].toUpperCase();
        for (i=1; i<str.length; i++){
            if (str[i-1] === ' ') {
                result=result+=str[i].toUpperCase();;
            }
            else{
                result+=str[i]; 
            }
        }
        return result;       
  };
  var str = new String(str);


  console.log(str.toJadenCase());

