function polindrome(str){
    const reversed= str.split("").reverse().join("")
    return reversed==str;
}



console.log(polindrome('aaa'));