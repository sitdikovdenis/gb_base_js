function div(val, by) {
    return (val - val % by) / by;
}

function numProcessing(num) {
    if (num > 999 | num < 0) {
        return {}
    }
    else {
        var hundreds = div(num, 100);
        var dozens = div((num - hundreds * 100), 10);
        var units = (num - hundreds * 100) - dozens * 10;
        return {
            'единицы': units,
            'десятки': dozens,
            'сотни': hundreds
        }
    }
}

console.log(numProcessing(1));
console.log(numProcessing(12));
console.log(numProcessing(123));
console.log(numProcessing(-1));
console.log(numProcessing(0));
console.log(numProcessing(1000));