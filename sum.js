function juas(num1) {
    return num1;
}

function sum(num1, num2) {
    const a = 1;
    if (num1 < 0) {
        return a;
    }

    return juas(num1) + juas(num2);
}

module.exports = sum;