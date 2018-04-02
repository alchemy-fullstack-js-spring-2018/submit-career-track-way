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

module.exports = { add, divide };