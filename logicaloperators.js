// && and;  || or
var weather = true;
var car = true;
if (weather && car){
    console.log("I am travelling")
}
else if (weather && !car){
    console.log("I will go park")
}
else{
    console.log("I will sleep")
}

function display(name){
    var n = name || "Ishan";
    console.log(n)
    return n
}

// console.log(display());
// console.log(display("Neelam"));
var name1;
// if (name1){
//     display(name1);
// }

(name1 || display(name1));
