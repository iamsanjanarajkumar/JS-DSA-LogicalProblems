let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let logic = document.getElementById("logic");
let result = document.getElementById("result");

function condition(x,y){
   if(x>y){
    result.innerHTML = `<h1> ${x} is Largest Number</h1>`
   } else{
    result.innerHTML = `<h1> ${y} is Largest Number</h1>`
   }
}

function maths(x,y){
    result.innerHTML = `<h1> ${Math.max(x,y)}  is the Largest Number</h1>`
}

function operator(x,y){
    result.innerHTML = x > y ? ` <h1>${x} is Largest Number</h1> ` : `<h1> ${y} is the Largest Number </h1>`
}

function submitHandler(event) {
    event.preventDefault();
    x = Number(inp1.value);
    y= Number(inp2.value);

    switch(logic.value){
        case "condition": 
         condition(x,y);
        break;
        case  "math": 
           maths(x,y);
         break;
        case "operator": operator(x,y);
         break;
        default: result.innerHTML = `<h1>Select Proper Method </h1>`
    }

}