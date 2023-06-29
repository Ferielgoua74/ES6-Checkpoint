const result = (a, b, c) => {

    switch(a){
        case "+" : return b+c; break;
        case "-" : return b-c; break;
        case "*" : return b*c; break;
        case "/" : return b/c; break;
        default  : break;
    }
}

function basicOp(o, a, b) {
    return eval(a+o+b);
}

    console.log(basicOp('+', 4, 7));
    console.log(basicOp('-', 15, 18));
    console.log(basicOp('*', 5, 5));
    console.log(basicOp('/', 49, 7));
