function closerTest(){
    var car = "BMW";
    function displayCarName(){
        console.log(car)
    }
    return displayCarName
}
var t = closerTest();
t();

var counter = (function(){
    var result = 0;
    function changeValueBy(value){
        result += value;
    }
    return {
        increaseby5: function(){
            changeValueBy(5);
        },
        decreaseby5: function(){
            changeValueBy(-5);
        },
        value: function(){
            return result
        }
    };
})();

console.log(counter.value());
counter.increaseby5();
console.log(counter.value());
counter.decreaseby5();
console.log(counter.value());
