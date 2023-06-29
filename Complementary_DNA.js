const result = (a) => {
    let array = [...a];
    return array.map(t => (t.toUpperCase() == "A") ? "T" : (t.toUpperCase() == "T") ? "A" : (t.toUpperCase() == "C") ? "G" : (t.toUpperCase() == "G") ? "C" : "").join("");
}

console.log(result("ATTGC"));
console.log(result("GTAT"));
