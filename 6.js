function maxChar(str){
    var dict={};
    var max=0
    var charMax=''
    for (let char of str){
        dict[char]= dict[char]+1 || 1;
        console.log(dict[char]);
    }
    console.log(dict);
    for (let char in dict){
        if (dict[char]>max){
            max=dict[char];
            charMax=char;
        }
    }
    return charMax
    
}

console.log(maxChar('sssggggff'));