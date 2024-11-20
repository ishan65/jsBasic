// object

var car = new Object();
car.make = "audi";
car.year = 2018;
car.door = 4;

console.log(car.make);
console.log(car.door);
console.log(car["year"]);

// object initialization
var vehicle = {
    make: "audi new version",
    door: 2,
    year: 2020
}
console.log(vehicle.make);
console.log(vehicle.door);
console.log(vehicle["year"]);

// contructor fuction
function wheeler(make, year){
    this.make = make;
    this.year = year;
}
var wheel = new wheeler("BMW", 2024);
console.log(wheel.make);
console.log(wheel["year"]);

// object.create

var country = {
    name: "India",
    displayName: function(){
        console.log(this.name)
    }
}

var ind = Object.create(country);
console.log(ind.name);
ind.displayName();

var usa = Object.create(country);
usa.name = "USA";
usa.displayName();

//////////////////////////////

// remove object
console.log(vehicle);
delete vehicle.door;
console.log(vehicle);

// year - lookup value
console.log(vehicle["year"]);

// validating the property
console.log(vehicle.hasOwnProperty("make"));

// access and modify the nested object
vehicle.accessories = {
    "ac": true,
    "extra wheel": true,
    "sun roof": true,
}
console.log(vehicle);
console.log(vehicle.accessories["sun roof"]);
vehicle.accessories["sun roof"] = false
console.log(vehicle);

// access keys of object.
console.log(Object.keys(vehicle));
