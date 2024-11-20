var country = {
    displayName: function(){
        console.log(this === country)
    },
    me: function() {
        return this
    }
}
country.displayName();
console.log(country.me());

var country2 = {
    displayName: ()=>{
        console.log(this === country2)
    },
    me: () => this
}
country2.displayName();
console.log(country2.me());
var x = this;
console.log(x == country2.me());

function add(a, b){
    return this.a + this.b + a + b
}
var t = {a: 3, b:9};
console.log(add.call(t, 80, 20));
console.log(add.apply(t, [80, 120]));

function m(){
    return this.a
}
p = {a: 4};
g =m.bind(p);
console.log(g());
pp = {a: 80};
u =g.bind(pp)// doesn't work
console.log(u());

var yy = {a:40, m:m, g:g, u:u};
console.log(yy.m(), yy.g(), yy.u());

