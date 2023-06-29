const initialValue = 0;
const result = (a) => {
   const array = a.filter(value => value > 0);
   //console.log(array);
   return array.reduce((previousValue, currentValue) =>  previousValue + currentValue, initialValue);
}

console.log(result([1,-4, 7,12]));
