const result = (str) => {
    
      if(str.length === 1){
        return str;
      }
      else if((str.length) % 2 === 0){
        return str.substring(~~(str.length / 2) - 1, ~~(str.length / 2)+1);
      }
      else if((str.length) % 2 === 1){
        //console.log(~~(str.length / 2));
        return str[~~(str.length / 2)];
      }

}
console.log(result("Bonjour"));
console.log(result("test"));
console.log(result("radar"));
console.log(result("B"));
