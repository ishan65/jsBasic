var data = {
    name: {
        fname: "Ishan",
        lname: "Mahajan"
    },
    age: 35,
    profession: "IT"
}

var stringy = JSON.stringify(data);
console.log(stringy);
console.log(typeof(stringy));

var objecty = JSON.parse(stringy);
console.log(objecty);
console.log(typeof(objecty));
