let pr = document.getElementById("principle");
let ti = document.getElementById("time");
let rate = document.getElementById("rate");
let result = document.getElementById("result")

function SubmitHandler(event){
    event.preventDefault();

    let p = Number(pr.value);
    let t = Number(ti.value);
    let r = Number(rate.value); //rate of interest monthly  
    let Amt = p * (Math.pow((1+ (r /100)),t));
    let CI = Amt - p;

    result.innerHTML = 
    `<h2>  Amount = ${Amt} Compound Interest = ${CI} </h2>`
}