const lex = str => str.split ("\n").map(s => s.trim()).filter(s => s.length);

const lexStatements = stats => {
    return stats.map(str => str.split (" ").map(s => s.trim()).filter(s => s.length))
}

const parser = tokens => {
    
}

let program = `
    __main__
    add 1 2
    mul 3 4
    sub 33 99

`

console.log(lexStatements(lex(program)));