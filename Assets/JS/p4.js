 //5x +3y -2 =?
 function expression(){
let x = Number(prompt("Enter value X: "));
let  y = Number(prompt("Enter value Y: "));

document.write(`<h2>Value of X ${x} Value of Y ${y} </h2>`);
let res = (5* x) + (3 * y ) -2;

document.write(`<h2>Value of expression 5x +3y -2 = ${res} </h2>`);
 }

 // 3x2 + 4x -12 =?

 function expression2(){
    let x = Number(prompt("Enter value X: "));
    document.write(`<h2>Value of X ${x}  </h2>`);

    let output = (3 * x *x) + (4 * x) -12;
    document.write(`<h2>Value of expression 3x2 +4x -12 =${output} </h2>`);
 }

 //4x2 +3xy -4x +8 =?
 function expression3 (){
    let x = Number(prompt("Enter value X: "));
  let  y = Number(prompt("Enter value Y: "));

 document.write(`<h2>Value of X ${x} Value of Y ${y} </h2>`); 
 let result = (4 *x *x ) + (3 *x * y ) - (4 *x ) +8 ;
 document.write(`<h2>Value of expression 4x2 + 3xy -4x  +8  =${result} </h2>`);
 
 }