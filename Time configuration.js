console.log("line 1")
setTimeout(function(){
    console.log("line 2");
},1000)
console.log("line 3")
// Here the order will be 1, 3 and 2


console.log("First Line")
function secondtask(){
    setTimeout(function() {
        console.log("Second line");
    },1000);
}
secondtask();
console.log("Third line")


console.log("First Line**")
async function Secondtask(){
    new Promise(function (resolve, reject){
        setTimeout(function() {
            console.log("Second line**");
            resolve();
        },1000);
    });
}
 
Secondtask();
console.log("Third line**")

