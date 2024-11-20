(function(){
    console.log("Ishan Mahajan");
})();

(ftest = function( num = 3){
    console.log("Ishan Mahajan "+ num);
})();

ftest(300);

var car = "audi";
(function(){
    var car = "BMW";
    console.log(car);
})();
console.log(car);
