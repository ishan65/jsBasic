var stringOne = "Elephants are the largest mammals on the earth.";
var stringTwo = " They use their trunks to pick up objects.";

// charAt()
console.log(stringOne.charAt(0));
console.log(stringOne.charAt(1));
// concat()
console.log(stringOne.concat(stringTwo));
// endsWith()
console.log(stringOne.endsWith("earth."));
// charCodeAt()
console.log(stringOne.charCodeAt(0));
// fromCharCode()
console.log(String.fromCharCode(69));
// includes()
console.log(stringOne.includes("the"));
// indexOf()
console.log(stringOne.indexOf("the"));
// lastIndexOf()
console.log(stringOne.lastIndexOf("the"));
// match()
console.log(stringOne.match(/the/g));
// repeat()
console.log(stringOne.repeat(3));
// replace()
console.log(stringOne.replace("Elephants", "Whales"));
// search()
console.log(stringOne.search("earth."));
// slice()
console.log(stringOne.slice(2,6));
// split()
console.log(stringOne.split(" "));
// startsWith()
console.log(stringOne.startsWith("Elephants"));
// substr()
console.log(stringOne.substr(2,6));
// substring()
console.log(stringOne.substring(2, 6));
// toLowerCase()
console.log(stringOne.toLowerCase());
// toUpperCase()
console.log(stringOne.toUpperCase());
// trim()
var stringThree = "  learn ";
console.log(stringThree.trim());