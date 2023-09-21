let fNum = document.getElementById('num');
let fMethod = document.getElementById('method1');
let result = document.getElementById('result');

function submitHandler(event){
    event.preventDefault();
    let  num = Number(fNum.value);
    switch(fMethod.value){
     case "loop":
     let res1 = primeUsingLoop(num);
       result.innerHTML = res1 ? `<h1> (Loop) ${num} is Prime</h1>` : `<h1> (Loop) ${num} is NOT Prime</h1>`;
     break;

     case "rec":
       let res2 = primeUsingRec(num);
       result.innerHTML =  res2 ? `<h2> (Rec) ${num} is  Prime</h2>` : `<h2> (Rec) ${num} is NOT Prime</h2>`;
     break;

     default: result.innerHTML =`<h1>Choose the Proper Selection</h1>`
    }
}


function primeUsingLoop(num){
    if(num <1){
        return false;
    }

    for(let i= 2 ;i<num ;i++){
        if(num%2 == 0){
            return false;
        } 
        return true;
    }
}

function primeUsingRec(n , i=2){
    if(n<= 2 ) return (n === 2 ) ? true : false;
    if( n % i === 0) return false;
    if(i * i > n) return true;
    console.log('i',i);
    return primeUsingRec(n,i+1);
 
}
