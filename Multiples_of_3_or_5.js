const result = a => {   
    var sum = [];
    for(let i = 1; i < a; i++){
         sum.push((((i % 3) === 0) || ((i % 5) === 0) ? i : 0)); 
    }
   return sum.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(result(10));
