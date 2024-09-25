/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
j=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]=="bar" | arr[i]=="baz" | arr[i]=="qux"){
        result[j] = arr[i];
        j++;
    }
}

for(let i=0;i<result.length;i++){
    if(i<2){
        result[i] = result[i].replace('a','@');
    }else{
        result[i] = result[i].toUpperCase();
    }
}

console.log(result);
//export result
module.exports = result;