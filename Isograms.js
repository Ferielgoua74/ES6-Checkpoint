const result = (a) => !a.toLowerCase().match(/([a-z]).*\1/i);

console.log(result("Dermatoglyphics"));
console.log(result("aba"));
console.log(result("moOse"));
