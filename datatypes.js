// number
var radius = 5;
const pi = 3.14
console.log("Area of circle :" + pi*radius*radius);

// string
var firstName = "Ishan";
var lastName = "Mahajan";
console.log("Complete name " + firstName + " " +lastName);

// boolean
var good = false;
if (good){
    console.log("Weather is good")
}
else{
    console.log("weather is bad")
}

// null
var state = null;
console.log("Present state : "+state);

// undefined;
var abc;
console.log(abc);

// symbol
var sym1 = Symbol("abd");
var sym2 = Symbol("abd");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));

// object
var animal = new Object();
animal.type = "mammal";
animal.name = "Elephant";
console.log(animal.name);
console.log(animal.type);
