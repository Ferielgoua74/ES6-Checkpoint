const result = a => [...a].map(s => `${s}${s}`).join("");

console.log(result("String"));
console.log(result("Hello World"));
console.log(result("1234!_ "));
