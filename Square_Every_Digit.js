const result = (a) => {
    const array = [...a.toString()];
    const res = array.map(item => item*item);
    return res.join("");
}

console.log(result(9119));
