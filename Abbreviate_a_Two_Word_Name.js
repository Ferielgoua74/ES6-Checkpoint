const result = a => a.split(" ").map(a => a.charAt(0).toUpperCase()).join(".");

console.log(result("Sam Harris"));
console.log(result("patrick feeney"));
