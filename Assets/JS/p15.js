let baseNum = document.getElementById('base');
let expoNum = document.getElementById('expo');
let result = document.getElementById('result');

function submitHandler(event){
    event.preventDefault();

    let b = Number(baseNum.value);
    let e = Number(expoNum.value);

    let out = loop(b,e);
    result.innerHTML = `<h1> base = ${b} , expo = ${e} and result = ${out} </h1>`;
}

function loop(b,e){
    if(e===0){
        return 1;
    // } else if( e ===1){
    //   return b;
    } else{
           
        return  b **  e;
    }
}


function recursion(b,e){
    if(e===0){
        return 1;
    } else{
        return b * recursion(b, e-1);
    }

}