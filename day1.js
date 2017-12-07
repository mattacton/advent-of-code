exports.test = (input) => {
    input += input[0];
    var total = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] == input[i+1]) {
            total += parseInt(input[i],10);
        }
    }
    return total;
};