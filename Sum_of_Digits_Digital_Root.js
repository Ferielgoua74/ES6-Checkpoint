const result = a => {
     let value = a;
   while(value > 10){
     value = sum(value);
   }
   return value;
}
const sum = s => [...s.toString()].reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0);

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

console.log(result(16));
console.log(result(942));
console.log(result(132189));
console.log(result(493193));

////

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
