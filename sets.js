const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(Arr){
  const mySet = new Set (Arr);
  return mySet;
}

console.log(valoresUnicos(meuArray));