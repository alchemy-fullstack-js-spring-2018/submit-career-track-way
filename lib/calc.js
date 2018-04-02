function add(x, y) {
    return x + y;
}

function divide(x, y) {
    try {
        const res = x / y;
        return res;
    } catch (error) {
        const res = Infinity;
        return res;
    }
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

module.exports = { add, divide, subtract, multiply };