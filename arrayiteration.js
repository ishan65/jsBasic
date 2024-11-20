var number = [100, 200, 300];

// forEach
number.forEach((num)=>{
    console.log(num);
})

// map
var square = number.map((num)=>{
    return num*num
})
console.log(square);

// filter
var filt = number.filter((num)=>{
    return num % 150 == 0
})
console.log(filt);

// reduce
var sum = number.reduce((result, num)=>{
    return result + num
}, 0)
console.log(sum);

// some
var testsome = number.some((num)=>{
    return num > 250
})
console.log(testsome)

// every
var testEvery = number.every((num)=>{
    return num > 250
})
console.log(testEvery)

// find

var search = number.find((num)=>{
    return num == 100
})
console.log(search)

// find index
var searchIndex = number.findIndex((num)=>{
    return num == 300
})
console.log(searchIndex)
