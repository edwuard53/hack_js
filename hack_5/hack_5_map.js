/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let origen = [];
j=8;
for(let i=0;i<4;i++){
    origen[i] = j;
    j-=2;
}

var result = origen.map(function (x) {
    return x - 1;
  });

console.log(result);

console.log("Otra forma");
j=1;
for(let i=0;i<4;i++){
    origen[i] = j;
    j+=2;
}

var result = origen.map(function (x) {
  return x;
}).reverse();

console.log(result);
//export result
module.exports = result;