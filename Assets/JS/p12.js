let fNum = document.getElementById('num');
let fMethod = document.getElementById('method1');
let result = document.getElementById('result');

function submitHandler(event){
    event.preventDefault();
    let  num = Number(fNum.value);
    switch(fMethod.value){
        case "rec":
        let res1 = recFact(num);
        result.innerHTML = `<h1> Factorial (Recursive) =${res1} </h1>`
         break;

        case "for":
        let res2 = forFact(num);
            result.innerHTML =`<h1> Factorial of ${num} using FOR= ${res2} </h1>`
        break;

        case "while":
        let res3 = whileFact(num);
        result.innerHTML =`<h1> Factorial (While) = ${res3} </h1>`
        break;

        case "ternary":
        let res4 = ternaryFact(num);
        result.innerHTML =`<h1> Factorial (Ternary Operator) = ${res4} </h1>`
        break;

        default: result.innerHTML = `<h1> Choose Proper Method </h1>`
    }

}
//recursion
function recFact(num){
   if(num ===0 ){
    return 1;
   } else{
     return num * recFact(num-1);
   }
}
//for loop
function forFact(num){
    if(num === 0) return 1;
    let fact ;
    for (let i = 2; i < num; i++) {
    fact = fact *num;
    }
    return fact;
}
//while condition
function whileFact(num){
    if(num === 0) return 1;
    let fa= 1 ;
    let i = 2;
    while(i<=num){
        num --;
       fa = fa * num ; 
    }

  return fa;
}
//ternary function
function ternaryFact(num){
    let fac = (num ===1  ||  num === 0 ) ? 1 : num * ternaryFact(num -1);
    return fac;
}