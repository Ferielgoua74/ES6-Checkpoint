 const result = a =>  a % 100 === 0 ? a / 100 : parseInt(a / 100) + 1;
    

console.log(result(55));
console.log(result(1705));
console.log(result(1900));
console.log(result(1601));
console.log(result(2000));
