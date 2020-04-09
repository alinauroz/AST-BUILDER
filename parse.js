const lex = str => str.split();

const Op = Symbol('op');
const Num = Sumbol('num');

const parse = tokens => {

    let c = 0;
    const peak = () => tokens[c];
    const consume = () => tokens[c++];

    const parseNum = () => ({val : parseInt(consume()), type : Num});
    
    const parseOp = () => {
        const node = {val: consume(), type : Op, expr : []}
        while (peak()) node.expr.push(parseExpr());
        return node;
    }

    const parseExpr = () => /\d/.test(peek() ? parseNum() : parseOp());

    return parseExpr();
}