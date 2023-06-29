const result = (a) => {

    let text = [...a];
        text = text.filter(t => t !== 'a' && t !== 'e' && t !== 'i' && t !== 'o' && t !== 'u' && t !== 'y' && t !== 'O');    
    return text.join("");
}

console.log(result("This website is for losers LOL!"));
