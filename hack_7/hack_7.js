/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
var result = arr.map(function (x) {
    //console.log("sub "+x.substring(1,x.length));
    return x[0].toUpperCase() + x.substring(1,x.length);
  });
  
  console.log(result);
//export result
module.exports = result;