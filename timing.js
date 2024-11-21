// setTimeout and setInterval

var timeout = setTimeout(()=>{
    console.log("Inside timout")
    // ...
    // bug
    // ...
}, 5000);
console.log("starting timing example");

setTimeout(() => clearTimeout(timeout),3000);

// var i = 0;
// var timeinterval = setInterval(()=>{
//     console.log(++i);
// }, 1000)

// setTimeout(()=>{
//     clearInterval(timeinterval);
// }, 10000)