let num = document.getElementById('num');
let output = document.getElementById('output');

function submitHandler(event){
    event.preventDefault();

    n= Number(num.value);
    if( n%1 === 0){
        output.innerHTML =`<h1> ${n} is an Integer Value</h1>`
    } else{
        output.innerHTML = `<h1> ${n} is NOT an Integer Value</h1>`
    }
}
//function isInt(n){
//     return n%1 === 0
// } & call this function in the if-else statement