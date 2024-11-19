var num = [100, 200, 300];

// spread operator
var num2 = [...num]
console.log(num, num2)

// slice
var num3 = num.slice(0);
console.log(num, num3)

var matrix = [[100, 200, 300]];
var copy = [...matrix];
copy[0].push(500);
console.log(matrix, copy)

deepcopy = JSON.parse(JSON.stringify(matrix));
deepcopy[0].push(600);
console.log(matrix, deepcopy);
