const isSqrt = (n) => {
    if(n < 0)
       return false;
    else if(n == Math.sqrt(n)*Math.sqrt(n))
       return true;
    else
       return false; 
}

console.log(isSqrt(-1));
console.log(isSqrt(0));
console.log(isSqrt(3));
console.log(isSqrt(4));
console.log(isSqrt(25));
console.log(isSqrt(26));
