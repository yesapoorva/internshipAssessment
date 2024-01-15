function assignment1(){
    const input = { a: 1, b: 2, c: 3 };

    const output = Object.keys(input).map(key => ({ [key]: input[key] }));

    console.log("input: "+JSON.stringify(input)+"\noutput: "+JSON.stringify(output));
}

assignment1()