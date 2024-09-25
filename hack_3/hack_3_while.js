/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let j=5;
let i=0;
while(i<5){
    result[i]=j;
    i++;
    j--;
}

//export result
module.exports = result;