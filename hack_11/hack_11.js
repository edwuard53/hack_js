/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let traduc = ["one","two","three","four","five"];
for(let i=0; i<numberArray.length;i++){
    if(i % 2 == 0){
        numberArray[i] = traduc[i];
    }
}

for(let i=0; i<stringArray.length;i++){
    switch(stringArray[i]){
        case 'foo':
            stringArray[i] = stringArray[i].replaceAll('o','0');
            break;
        case 'bar': 
            stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substring(1,stringArray[i].length);
            break;
        case 'baz': 
            stringArray[i] = stringArray[i].replaceAll('a','@');
            break;
        case 'qux': 
            stringArray[i] = stringArray[i].substring(0,stringArray[i].length-1)+stringArray[i][stringArray[i].length-1].toUpperCase();
            break;
        case 'echo': 
            stringArray[i] = stringArray[i].replaceAll('o','0');
            stringArray[i] = stringArray[i].replaceAll('e','3');
            break;                        
    }
}

result = [].concat("h@ck", numberArray, "h@ck", stringArray, "h@ck");
console.log(result);

//export result
module.exports = result;