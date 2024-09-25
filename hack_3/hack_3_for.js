/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];
j=5;
for (let i=0; i<5; i++){
    result[i] = j;
    j--;
}


//export result
module.exports = result;