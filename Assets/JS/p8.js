let fInp = document.getElementById("str");
let output = document.getElementById("result");

function stringHandler(event){
    event.preventDefault();
    let inp = fInp.value;

    let arr = inp.split('').reverse().join('');
    output.innerText =`${inp} after reversal => ${arr}`;
}
// for(var i= data.length-1; i>=0; i--){
        //     result += data[i];
        //     console.log(i,data[i]);
        // }