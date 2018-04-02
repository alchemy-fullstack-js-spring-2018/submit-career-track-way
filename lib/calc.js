module.exports = {
    add(x, y) {
        return x + y;
    }, 
    subtract(x, y) {
        return x - y;
    },
    multiply(x, y) {
        return x * y;
    }, 
    divide(x, y) {
        if(y === 0) {
            throw new Error ('Attempt to divide by zero (0)');
        }
        return x / y;
    }
}; 