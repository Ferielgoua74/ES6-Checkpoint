const result = (a) => {
    let text = [...a];
   if(a.length > 1){
        for(let i = 0; i < a.length - 4; i++)
         text[i] = "#";
     return text.join("");
   }
  
     return text.join("");
}


console.log(result("4556364607935616"));
console.log(result("64607935616"));
console.log(result("1"));
console.log(result(""));
console.log(result("Skippy"));
console.log(result("Nananananananananananananananana Batman!"));
