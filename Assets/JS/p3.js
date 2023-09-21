//swapping with temporary variable

function swapping(){
    let x = Number(prompt("enter input 1 :"));
    let y = Number(prompt("enter input 2 :"));
    let temp;

    document.write(`<h2> Before variable swapping  
          Number 1 = ${x} Number 2 = ${y} </h2`);

    temp = x;
    x = y;
    y = temp;

    document.write(`<h2> After variable swapping  
          Number 1 = ${x} Number 2 = ${y} </h2>`);

    }

//swapping without using temporary variables - METHOD -1
function swap(){
    let a = Number(prompt("enter input 1 :"));
    let b = Number(prompt("enter input 2 :"));
  
    document.write(`<h2> Before variable swapping  
         Input 1 = ${a} Input 2 = ${b} </h2`);

    a = a+b;
    b= a-b;
    a= a-b;
    
    document.write(`<h2> After  variable swapping  
    Input 1 = ${a} Input 2 = ${b} </h2`);

}

//swapping with using arguments es-6 destructuring assignment  -METHOD-2
function swapWithArguments() {
    let a = Number(prompt("enter input 1 :"));
    let b = Number(prompt("enter input 2 :"));

    document.write(`<h2> Before variable swapping  
    Input 1 = ${a} Input 2 = ${b} </h2`);
    [a,b] = [b,a];
 
    document.write(`<h2> After  variable swapping  
    Input 1 = ${a} Input 2 = ${b} </h2`);

}

//swapping using XOR operator-METHOD-3
function swapXor(){
    let a = Number(prompt("enter input 1 :"));
    let b = Number(prompt("enter input 2 :"));

    document.write(`<h2> Before variable swapping  
    Input 1 = ${a} Input 2 = ${b} </h2`);
    a= a^b;
    b=a^b;
    a =a^b;
      
    document.write(`<h2> After  variable swapping  
    Input 1 = ${a} Input 2 = ${b} </h2`);
}