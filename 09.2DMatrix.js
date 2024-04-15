function matrix(input) {
    let rowSum = [];
    let colSum = [];
    for (let i = 0; i < input.length; i++) {
        let sum = input[i].reduce((a, b) => a + b);
        rowSum.push(sum);
    }
    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        for (let j = 0; j < input.length; j++) {
            sum += input[j][i];

        }
        colSum.push(sum);
    }
    let finalArr = rowSum.concat(colSum);

    return finalArr.every((el, i, arr)=> el===arr[0])

}
console.log(matrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));