console.log("Hello world")

function add(a,b){
    console.log("hello from inside")
    return a+b;
}
console.log(add(5,3));

//Modern way:

let add2 = (a,b)=>{
    return a+b;
}
console.log(add2(9,3));