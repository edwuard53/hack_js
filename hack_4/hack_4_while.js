/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let j=1;
let i=0;
while(i<4){
    result[i] = j;
    i++;
    j+=2;
}

//export result
module.exports = result;