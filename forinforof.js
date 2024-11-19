var arr = [100, 200, 300]
arr.key1 = 1000

for (let x in arr){
    console.log(x);
}

for (let x of arr){
    console.log(x);
}

let car = {make: "audi", wheels: 4, type:"hachback"};

for (let x in car){
    console.log(x, car[x]);
}
