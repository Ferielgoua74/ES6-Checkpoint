const XO = (a) => { 
       let sum = 0;
       for(let i = 0; i < a.length; i++){
           if(a[i] == 'o' || a[i] == 'O' ){
              sum += 1;
           }else if(a[i] === 'x' || a[i] === 'X' ){
              sum -= 1;
           }
        }        
        return (sum === 0) ? true : false;
    }


console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
