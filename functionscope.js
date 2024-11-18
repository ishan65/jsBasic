var data = "Hello World"

function display(){
    var data = "Hello from function";
    console.log(data)
}

// display()

function notes(){
     display();
     var data = "Hello from notes function";
     display();
}

notes();

function tweetData(a, b){
    function addition(a, b){
        return a + b
    }
    return addition(a, b)
}

console.log(tweetData(5, 9));
console.log(addition(5, 9)); // will give error - wrong scoped
