/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let origen = [];
j=0;
for(let i=0;i<4;i++){
    origen[i] = j;
    j+=2;
}

var result = origen.map(function (x) {
    return x + 1;
  });

console.log(result);
//export result
module.exports = result;