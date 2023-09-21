function submitHandler(event){
   e.preventDefault();
let x  = document.getElementById("km");
let output = document.getElementById("output");

let milesConstant = 0.6213 ;


let result  = (Number(x.value)) * milesConstant;
output.innerText = `Km to Mile after conversion = ${result.toFixed(3)}`
}