const result = count => { 

    var acc = [];

    for(let i = 0; i <= count; i++){
          acc.push(i);
    }
    
    return (count < 0) ? `${count}<0` : (count === 0) ? "0=0" : acc.join("+") + ` = ${acc.reduce((previousValue, currentValue) => previousValue + currentValue, 0).toString()}`;
}

console.log(result(6));
console.log(result(-15));
console.log(result(0));
