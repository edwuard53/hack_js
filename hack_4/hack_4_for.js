/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
j=1;
for(let i=0;i<4;i++){
    result[i] = j;
    j+=2;
}

console.log(result);

//export result
module.exports = result;