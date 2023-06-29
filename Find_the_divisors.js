const result = a => {
     let res = [];
    for(let i = 2; i < a; i++){
      if((a % i) === 0){
        res.push(i);
      }      
    }
    return res.length > 0 ? res : a + " is prime";  
}

console.log(result(12));
console.log(result(25));
console.log(result(13));
