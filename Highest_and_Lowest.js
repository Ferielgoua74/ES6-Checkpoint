const highAndLow = (a) => {   
    let array = a.split(" ");
    array = array.sort((b, c) => c - b );
    return array[0].concat(" ", array[array.length - 1]);
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
