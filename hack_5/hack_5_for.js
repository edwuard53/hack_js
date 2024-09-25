/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let j=7;
for(let i=0;i<4;i++){
    result[i] = j;
    j-=2;
}

//export result
module.exports = result;