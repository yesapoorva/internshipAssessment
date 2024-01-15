const assignment2 = function(){
    const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
    
    const output = Object.fromEntries(input.map(Object.entries).flat());
    
    console.log("input"+JSON.stringify(input)+"\noutput"+JSON.stringify(output));
}

assignment2()