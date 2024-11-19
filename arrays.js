var animal = ["rat", "cat", "dog"];
var number =[1 ,200, 500];
var multiArray = [["Ishan", 35], ["Neelam", 65]]

console.log(animal[2]);
console.log(number[1]);
console.log(multiArray[0][1]);

multiArray[0][1] = 25;
console.log(multiArray);

animal.forEach(function(ele){
    console.log(ele);
});