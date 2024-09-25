/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i=0;
let j=7;
while(i<4){
    result[i] = j;
    j-=2;
    i++;
}

//export result
module.exports = result;