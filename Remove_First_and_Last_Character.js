const result = a => {
   let text = [...a];
   return text.length > 2 ? text.slice(1, text.length - 1).join("") : "";
}

console.log(result("straightforward"));
