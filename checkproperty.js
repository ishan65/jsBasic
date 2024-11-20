var car = {
    make: "Audi",
    year: 2024
}

console.log(car.hasOwnProperty("year"));
console.log(car.hasOwnProperty("year1"));
console.log("year" in car);
console.log("year1" in car);

console.log(car.hasOwnProperty("valueOf"));
console.log("valueOf" in car);
