const result = (a) => {
   const isSqrt = Math.sqrt(a) % 1 === 0 ? true : false;
   return isSqrt ? Math.pow(Math.sqrt(a)+1, 2) : -1;   
}

console.log(result(625));
