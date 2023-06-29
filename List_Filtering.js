const filter_list = (a) => {

    return a.filter(value => (typeof value !== 'string') ? value : (value == 0) ? 0 : null);
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0, -1, 15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
