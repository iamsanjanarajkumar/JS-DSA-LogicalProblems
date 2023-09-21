let num = document.getElementById("num");
let op = document.getElementById("logic");
let result = document.getElementById("result");

 

function SubmitHandler(event){
    event.preventDefault();
    let x = Number(num.value);

    switch(op.value){
        case "sqrt": let sq= Math.sqrt(x); 
        result.innerHTML =`<h1>Square root of ${x} = ${sq} </h1>`
         break;
         case "cbrt": let cbrt= Math.cbrt(x);
         result.innerHTML =`<h1>Cube Root of ${x} =${cbrt} </h1>`

         default: output.innerHTML = `<h1> Choose Valid Operation </h1>`
         break;
    }
}
