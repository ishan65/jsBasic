// condition ? exp1 : exp2

var num = 400;
// if(num >= 5){
//     console.log("More than 5")
//     if(num < 100){
//         console.log("less than 3 digit number")
//     }
//     else{
//         console.log("greater than 3 digit number")
//     }
// }
// else{
//     console.log("less than 5")
// }

(num >= 5) ? (
    console.log("More than 5"),
    (num < 100) ? console.log("less than 3 digit number") : console.log("greater than 3 digit number")
) : console.log("less than 5")
